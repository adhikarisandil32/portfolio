import React from "react"

export default function Timeline({ academicInfo }) {
  return (
    <ol className="relative border-s border-gray-800 dark:border-gray-700">
      {academicInfo.map((eachInfo, idx) => (
        <li key={idx} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">{eachInfo.degree}</h3>
          <p className="font-normal text-gray-500 dark:text-gray-400">{eachInfo.stream}</p>
          <p className="mb-4 font-normal text-gray-500 dark:text-gray-400">{eachInfo.board}</p>
        </li>
      ))}
    </ol>
  )
}
