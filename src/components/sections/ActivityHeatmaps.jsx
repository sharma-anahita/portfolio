// src/components/sections/ActivityHeatmaps.jsx
// Drop this file into src/components/sections/
// Then import and add <ActivityHeatmaps /> after <CodingProfiles /> in App.jsx

import React, { useState, useEffect, useRef, useCallback } from 'react';

// ─── Helpers ──────────────────────────────────────────────────────────────────

const GITHUB_USERNAME = 'sharma-anahita';
const LEETCODE_USERNAME = 'stuffToDo';

/** UTC ISO date string "YYYY-MM-DD" from a Date object */
const toISO = (d) => d.toISOString().split('T')[0];

/** UTC-safe ISO date from a unix timestamp (seconds) — prevents TZ shifting */
const tsToISO = (ts) => new Date(Number(ts) * 1000).toISOString().split('T')[0];

/** Today's UTC date, computed once at module load */
const TODAY = toISO(new Date());

/** All dates in the past 52 weeks (364 days) ending today, UTC-safe */
function buildDateRange() {
  const days = [];
  const base = new Date();
  base.setUTCHours(0, 0, 0, 0);
  for (let i = 363; i >= 0; i--) {
    const d = new Date(base);
    d.setUTCDate(base.getUTCDate() - i);
    days.push(toISO(d));
  }
  return days; // oldest → newest
}

/** Group a flat array of dates into ISO-week columns (Sun-Sat) */
function toWeekColumns(days) {
  const cols = [];
  // figure out what weekday the first date is (0=Sun)
  const firstDate = new Date(days[0]);
  const startPad = firstDate.getDay(); // how many empty cells before first real day
  const cells = [...Array(startPad).fill(null), ...days];
  for (let i = 0; i < cells.length; i += 7) {
    cols.push(cells.slice(i, i + 7));
  }
  return cols;
}

/** Return colour class for a count, themed to portfolio palette */
const githubColor = (count) => {
  if (!count) return 'bg-gray-100';
  if (count >= 10) return 'bg-pink-600';
  if (count >= 6) return 'bg-pink-500';
  if (count >= 3) return 'bg-pink-400';
  return 'bg-pink-200';
};

const leetcodeColor = (count) => {
  if (!count) return 'bg-gray-100';
  if (count >= 6) return 'bg-purple-600';
  if (count >= 4) return 'bg-purple-500';
  if (count >= 2) return 'bg-purple-400';
  return 'bg-purple-200';
};

const MONTH_LABELS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAY_LABELS   = ['S','M','T','W','T','F','S'];
/** Calculate current streak, longest streak, and last active date from a countMap */
function computeStreaks(countMap, dateRange) {
  let currentStreak = 0;
  let longestStreak = 0;
  let run = 0;

  // longest streak — full forward pass
  for (let i = 0; i < dateRange.length; i++) {
    if (countMap[dateRange[i]] > 0) {
      run++;
      if (run > longestStreak) longestStreak = run;
    } else {
      run = 0;
    }
  }

  // current streak — walk backwards; skip today if empty (day not over yet)
  for (let i = dateRange.length - 1; i >= 0; i--) {
    const d = dateRange[i];
    if (countMap[d] > 0) {
      currentStreak++;
    } else if (d === TODAY) {
      continue;
    } else {
      break;
    }
  }

  return { currentStreak, longestStreak };
}

/** Last date with any activity within the dateRange */
function getLastActive(countMap, dateRange) {
  for (let i = dateRange.length - 1; i >= 0; i--) {
    if (countMap[dateRange[i]] > 0) return dateRange[i];
  }
  return null;
}

/** Fetch helper with AbortController-based timeout */
function fetchWithTimeout(url, ms = 9000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(id));
}



// ─── Sub-component: Heatmap Grid ──────────────────────────────────────────────

const HeatmapGrid = ({ dateRange, countMap, colorFn, loading, error }) => {
  // tooltip: { text, x, y } in viewport coords
  const [tooltip, setTooltip] = useState(null);
  const weekCols = toWeekColumns(dateRange);

  // Build month label positions (col index where month first appears)
  const monthPositions = {};
  weekCols.forEach((col, ci) => {
    col.forEach((date) => {
      if (!date) return;
      // UTC month to match UTC date building
      const m = new Date(date + 'T00:00:00Z').getUTCMonth();
      if (monthPositions[m] === undefined) monthPositions[m] = ci;
    });
  });

  // Stable handlers — avoid re-renders on every mouse move
  const handleEnter = useCallback((e, date, count) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      text: count
        ? `${count} contribution${count !== 1 ? 's' : ''} on ${date}`
        : `No contributions on ${date}`,
      // anchor to centre of square; tooltip will be above it
      x: rect.left + rect.width / 2,
      y: rect.top + window.scrollY,
    });
  }, []);

  const handleLeave = useCallback(() => setTooltip(null), []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-28">
        <div className="flex gap-1">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-sm bg-gray-200 animate-pulse"
              style={{ animationDelay: `${i * 70}ms` }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-28 text-sm text-gray-400 italic text-center px-2">
        {error}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* ── Fixed tooltip anchored to viewport coords, overflow-safe ── */}
      {tooltip && (
        <div
          className="fixed pointer-events-none z-50 px-2.5 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap shadow-lg"
          style={{
            left: `min(max(${tooltip.x}px, 80px), calc(100vw - 80px))`,
            top: tooltip.y - 38,
            transform: 'translateX(-50%)',
          }}
        >
          {tooltip.text}
          {/* caret */}
          <span
            style={{
              position: 'absolute', left: '50%', transform: 'translateX(-50%)',
              top: '100%', borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent', borderTop: '5px solid #111827',
              display: 'block', width: 0, height: 0,
            }}
          />
        </div>
      )}

      {/* Month labels — responsive text + cell width */}
      <div className="flex gap-[2px] sm:gap-[3px] mb-1 pl-5 sm:pl-6 overflow-hidden">
        {weekCols.map((_, ci) => {
          const entry = Object.entries(monthPositions).find(([, v]) => v === ci);
          return (
            <div key={ci} className="w-2 sm:w-3 text-[8px] sm:text-[9px] text-gray-400 flex-shrink-0">
              {entry ? MONTH_LABELS[Number(entry[0])] : ''}
            </div>
          );
        })}
      </div>

      <div className="flex gap-[2px] sm:gap-[3px]">
        {/* Day labels */}
        <div className="flex flex-col gap-[2px] sm:gap-[3px] mr-1">
          {DAY_LABELS.map((d, i) => (
            <div
              key={i}
              aria-hidden="true"
              className="w-4 h-2 sm:h-3 text-[8px] sm:text-[9px] text-gray-400 leading-3 text-right pr-0.5"
            >
              {i % 2 === 1 ? d : ''}
            </div>
          ))}
        </div>

        {/* Grid columns — responsive square size (Change 5) */}
        {weekCols.map((col, ci) => (
          <div key={ci} className="flex flex-col gap-[2px] sm:gap-[3px]">
            {col.map((date, di) => {
              if (!date) {
                return <div key={di} className="w-2 h-2 sm:w-3 sm:h-3 flex-shrink-0 bg-transparent" />;
              }
              const count = countMap[date] || 0;
              const ariaLabel = count
                ? `${count} contribution${count !== 1 ? 's' : ''} on ${date}`
                : `No contributions on ${date}`;
              return (
                <div
                  key={di}
                  role="gridcell"
                  tabIndex={0}
                  aria-label={ariaLabel}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-sm flex-shrink-0 transition-transform duration-100
                    hover:scale-125 focus:scale-125 focus:outline-none focus:ring-1 focus:ring-offset-1
                    focus:ring-gray-400 cursor-default ${colorFn(count)}`}
                  onMouseEnter={(e) => handleEnter(e, date, count)}
                  onMouseLeave={handleLeave}
                  onFocus={(e) => handleEnter(e, date, count)}
                  onBlur={handleLeave}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Sub-component: Legend ────────────────────────────────────────────────────

const Legend = ({ colorFn, labels }) => (
  <div className="flex items-center gap-1.5 mt-3" aria-hidden="true">
    <span className="text-[10px] text-gray-400">Less</span>
    {labels.map((l, i) => (
      <div
        key={i}
        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-sm ${colorFn(l)}`}
      />
    ))}
    <span className="text-[10px] text-gray-400">More</span>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const ActivityHeatmaps = () => {
  // Stable ref — rebuilding every render is unnecessary
  const dateRange = useRef(buildDateRange()).current;

  // ── GitHub state — SVG embed approach (no fragile API) ──
  const [ghImgLoaded, setGhImgLoaded] = useState(false);
  const [ghImgError, setGhImgError]   = useState(false);

  // ── LeetCode state ──
  const [lcData, setLcData]     = useState({});
  const [lcLoading, setLcLoading] = useState(true);
  const [lcError, setLcError]   = useState(null);
  const [lcStats, setLcStats]   = useState({ activeDays: 0, currentStreak: 0, longestStreak: 0, lastActive: null });

  const sectionRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [visible, setVisible] = useState(false);

  // ── Intersection Observer: only fetch when section visible ──
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHasLoaded(true); setVisible(true); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // ── GitHub: no fetch needed — ghchart.rshah.org SVG is the primary display ──
  // (removed fragile github-contributions-api.vercel.app dependency)

  // ── LeetCode fetch — with 9s timeout + clean error handling ──
  useEffect(() => {
    if (!hasLoaded) return;
    let cancelled = false;
    const fetchLC = async () => {
      try {
        const res = await fetchWithTimeout(
          `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/calendar`,
          9000
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (cancelled) return;

        // submissionCalendar is a JSON string of { unixTimestamp: count }
        const raw = json.submissionCalendar
          ? JSON.parse(json.submissionCalendar)
          : {};

        const map = {};
        let activeDays = 0;
        Object.entries(raw).forEach(([ts, count]) => {
          // Change 2: UTC-safe timestamp conversion
          const date = tsToISO(ts);
          map[date] = (map[date] || 0) + count;
          if (count > 0) activeDays++;
        });

        // Change 6: compute current streak, longest streak, last active date
        const { currentStreak, longestStreak } = computeStreaks(map, dateRange);
        const lastActive = getLastActive(map, dateRange);

        setLcData(map);
        setLcStats({ activeDays, currentStreak, longestStreak, lastActive });
      } catch (e) {
        if (cancelled) return;
        const isTimeout = e.name === 'AbortError';
        setLcError(
          isTimeout
            ? 'LeetCode data timed out — the API may be waking up. Try refreshing.'
            : 'Could not load LeetCode data. Try refreshing the page.'
        );
      } finally {
        if (!cancelled) setLcLoading(false);
      }
    };
    fetchLC();
    return () => { cancelled = true; };
  }, [hasLoaded]);

  // ghchart SVG URL — used directly in the img tag below

  return (
    <section
      ref={sectionRef}
      id="activity-heatmaps"
      className="px-4 sm:px-8 py-10 transition-all duration-300"
    >
      <div className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Section heading */}
        <h2 className="mb-2 text-base sm:text-lg font-semibold text-gray-800">
          🌱 Contribution Activity
        </h2>
        <p className="mb-8 text-sm text-gray-500">
          A year of commits and solutions — consistency captured in green and pink squares.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* ── LeetCode Card (first) ── */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50 p-6 overflow-x-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {/* LeetCode icon */}
                <svg className="w-5 h-5" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M68.0063 83.0664C70.5 80.5764 74.5064 80.5827 76.9936 83.0664L88.4448 94.6234C90.8857 97.0612 90.8857 101.06 88.4448 103.498C86.0047 105.939 82.0035 105.939 79.5645 103.498L68.1133 91.9416C65.6189 89.4516 65.5128 85.5574 68.0063 83.0664ZM27.3722 83.0664C29.8656 85.5574 29.7595 89.4516 27.2651 91.9416L15.8139 103.498C13.3748 105.939 9.37366 105.939 6.93432 103.498C4.49349 101.061 4.49349 97.0612 6.93432 94.6234L18.3859 83.0664C20.8729 80.5827 24.8783 80.5764 27.3722 83.0664Z" fill="#FFA116"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M47.5 0C49.1569 0 50.5 1.34315 50.5 3V13.5C50.5 15.1569 49.1569 16.5 47.5 16.5C45.8431 16.5 44.5 15.1569 44.5 13.5V3C44.5 1.34315 45.8431 0 47.5 0Z" fill="#262626"/>
                  <path d="M0 60.5C0 41.9233 15.066 27 33.5 27H61.5C79.934 27 95 41.9233 95 60.5C95 79.0767 79.934 94 61.5 94H33.5C15.066 94 0 79.0767 0 60.5Z" fill="#FFA116"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M33.5 39C22.1782 39 13 48.1782 13 59.5C13 70.8218 22.1782 80 33.5 80H61.5C72.8218 80 82 70.8218 82 59.5C82 48.1782 72.8218 39 61.5 39H33.5ZM47.4999 49.4584C43.0274 49.4584 38.8579 51.2239 35.7805 54.3013C35.7805 54.3013 33.2217 56.8601 33.2217 60.5C33.2217 64.1399 35.7805 66.6987 35.7805 66.6987C38.8579 69.7761 43.0274 71.5416 47.4999 71.5416C51.9724 71.5416 56.1419 69.7761 59.2193 66.6987L59.2194 66.6987C62.2967 63.6213 64.0622 59.4518 64.0622 54.9793C64.0622 50.5068 62.2967 46.3373 59.2193 43.26C56.1419 40.1826 51.9724 38.4171 47.4999 38.4171C43.0274 38.4171 38.8579 40.1826 35.7805 43.26L28.8281 50.2124C26.4379 52.6026 25.0933 55.8491 25.0933 59.2291V61.7709C25.0933 65.1509 26.4379 68.3974 28.8281 70.7876L35.7805 77.74C38.8579 80.8174 43.0274 82.5829 47.4999 82.5829C51.9724 82.5829 56.1419 80.8174 59.2193 77.74C62.2967 74.6626 64.0622 70.4931 64.0622 66.0206V47.5794C64.0622 43.1069 62.2967 38.9374 59.2193 35.86C56.1419 32.7826 51.9724 31.0171 47.4999 31.0171C43.0274 31.0171 38.8579 32.7826 35.7805 35.86" fill="white"/>
                </svg>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">LeetCode</h3>
                  <a
                    href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-purple-400 hover:underline"
                  >
                    @{LEETCODE_USERNAME}
                  </a>
                </div>
              </div>
              {/* Mini stat pills — recruiter-friendly metrics (Change 6) */}
              {!lcLoading && !lcError && (
                <div className="flex gap-1.5 flex-wrap justify-end">
                  {lcStats.activeDays > 0 && (
                    <span className="px-2 py-0.5 text-[11px] font-semibold bg-purple-50 text-purple-600 rounded-full">
                      {lcStats.activeDays} days
                    </span>
                  )}
                  {lcStats.currentStreak > 0 && (
                    <span className="px-2 py-0.5 text-[11px] font-semibold bg-orange-50 text-orange-500 rounded-full">
                      🔥 {lcStats.currentStreak}d streak
                    </span>
                  )}
                  {lcStats.longestStreak > 0 && (
                    <span className="px-2 py-0.5 text-[11px] font-semibold bg-yellow-50 text-yellow-600 rounded-full">
                      ⭐ {lcStats.longestStreak}d best
                    </span>
                  )}
                  {lcStats.lastActive && (
                    <span className="px-2 py-0.5 text-[11px] font-semibold bg-gray-50 text-gray-500 rounded-full">
                      Last: {lcStats.lastActive}
                    </span>
                  )}
                </div>
              )}
            </div>

            <HeatmapGrid
              dateRange={dateRange}
              countMap={lcData}
              colorFn={leetcodeColor}
              loading={lcLoading}
              error={lcError}
            />
            {!lcLoading && !lcError && (
              <Legend
                colorFn={leetcodeColor}
                labels={[0, 1, 3, 5, 7]}
              />
            )}
          </div>

          {/* ── GitHub Card (second) ── */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50 p-6 overflow-x-auto">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-800 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.230.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.230 3.297-1.230.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">GitHub</h3>
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-pink-400 hover:underline"
                  >
                    @{GITHUB_USERNAME}
                  </a>
                </div>
              </div>
              {/* Static pill — no API dependency */}
              <span className="px-2.5 py-1 text-xs font-semibold bg-pink-50 text-pink-600 rounded-full flex-shrink-0">
                Live chart
              </span>
            </div>

            {/* GitHub SVG embed — primary display; falls back gracefully */}
            <div className="w-full">
              {!ghImgLoaded && !ghImgError && (
                <div className="flex items-center justify-center h-24">
                  <div className="flex gap-1">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-sm bg-gray-200 animate-pulse"
                        style={{ animationDelay: `${i * 70}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              {!ghImgError ? (
                <img
                  src={`https://ghchart.rshah.org/e879a0/${GITHUB_USERNAME}`}
                  alt={`GitHub contribution chart for ${GITHUB_USERNAME}`}
                  className={`w-full rounded transition-opacity duration-500 scale-[0.92] origin-top-left ${ghImgLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
                  onLoad={() => setGhImgLoaded(true)}
                  onError={() => { setGhImgLoaded(true); setGhImgError(true); }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-24 gap-2 text-xs text-gray-400 italic text-center">
                  <span>Chart temporarily unavailable.</span>
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:underline not-italic font-medium"
                  >
                    View on GitHub →
                  </a>
                </div>
              )}
            </div>
            {ghImgLoaded && !ghImgError && (
              <p className="mt-1.5 text-[10px] text-gray-400 text-right">
                via ghchart.rshah.org
              </p>
            )}
          </div>

        </div>

        {/* Bottom note */}
        <p className="mt-4 text-xs text-center text-gray-400 italic">
          GitHub chart via ghchart.rshah.org · LeetCode data via public API · hover or focus any square for details
        </p>
      </div>
    </section>
  );
};

export default ActivityHeatmaps;
