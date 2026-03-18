"use client";
import React from "react";

const SkeletonBlock = ({ className }) => (
  <div className={`bg-gray-200/80 animate-pulse ${className}`} />
);

export default function CitySkeleton({
  showFilterBar = true,
  contentOnly = false,
}) {
  const cards = (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="rounded-xl overflow-hidden bg-white">
          <SkeletonBlock className="h-48 w-full" />
          <div className="p-3.5 space-y-2">
            <SkeletonBlock className="h-6 w-1/2 rounded" />
            <SkeletonBlock className="h-4 w-5/6 rounded" />
            <div className="flex gap-3">
              <SkeletonBlock className="h-3 w-8 rounded" />
              <SkeletonBlock className="h-3 w-8 rounded" />
              <SkeletonBlock className="h-3 w-12 rounded" />
            </div>
            <SkeletonBlock className="h-3 w-20 rounded" />
            <SkeletonBlock className="h-2.5 w-24 rounded mt-2" />
            <SkeletonBlock className="h-2.5 w-1/2 rounded" />
          </div>
        </div>
      ))}
    </div>
  );

  const pagination = (
    <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 mt-12 mb-20 w-full">
      <SkeletonBlock className="h-8 w-14 sm:w-20 rounded" />
      {Array.from({ length: 5 }).map((_, i) => (
        <SkeletonBlock key={i} className="h-8 w-8 sm:h-10 sm:w-10 rounded" />
      ))}
      <SkeletonBlock className="h-8 w-14 sm:w-20 rounded" />
    </div>
  );

  const content = (
    <div className="w-full px-4 sm:px-6 lg:px-8 pb-20 pt-4 sm:pt-6">
      {cards}
      {pagination}
    </div>
  );

  if (contentOnly)
    return (
      <>
        {cards}
        {pagination}
      </>
    );

  return (
    <div className="min-h-screen bg-white">
      {showFilterBar ? (
        <div className="sticky top-0 z-40 -mt-px bg-white w-full py-2">
          <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-3">
                <SkeletonBlock className="h-9 w-28 rounded-full" />
                <SkeletonBlock className="h-9 w-32 rounded-full" />
                <SkeletonBlock className="h-9 w-36 rounded-full" />
                <SkeletonBlock className="h-9 w-24 rounded-full" />
              </div>
              <SkeletonBlock className="h-9 w-24 rounded-full lg:hidden" />
            </div>
            <SkeletonBlock className="h-9 w-28 rounded-lg" />
          </div>
        </div>
      ) : null}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mb-3 sm:mb-4">
          <SkeletonBlock className="h-9 w-2/3 sm:h-10 sm:w-1/2 rounded" />
          <SkeletonBlock className="mt-2 h-4 w-1/2 rounded" />
        </div>
      </div>
      {content}
    </div>
  );
}
