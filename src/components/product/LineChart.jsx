import React from "react";

const LineChart = () => {
  const rating5 = 90;
  const rating4 = 80;
  const rating3 = 70;
  const rating2 = 60;
  const rating1 = 50;
  return (
    <>
      <div class="flex items-center font-semibold">
        <div className="mr-2">5</div>
        <div class=" w-24 h-2 bg-gray-200 rounded-full">
          <div
            class="h-2 bg-primary rounded-full"
            style={{ width: `${rating5}%` }}
          ></div>
        </div>
      </div>

      <div class="flex items-center font-semibold">
        <div className="mr-2">4</div>
        <div class=" w-24 h-2 bg-gray-200 rounded-full">
          <div
            class="h-2 bg-primary rounded-full"
            style={{ width: `${rating4}%` }}
          ></div>
        </div>
      </div>

      <div class="flex items-center font-semibold">
        <div className="mr-2">3</div>
        <div class=" w-24 h-2 bg-gray-200 rounded-full">
          <div
            class="h-2 bg-primary rounded-full"
            style={{ width: `${rating3}%` }}
          ></div>
        </div>
      </div>
      <div class="flex items-center font-semibold">
        <div className="mr-2">2</div>
        <div class=" w-24 h-2 bg-gray-200 rounded-full">
          <div
            class="h-2 bg-primary rounded-full"
            style={{ width: `${rating2}%` }}
          ></div>
        </div>
      </div>
      <div class="flex items-center font-semibold">
        <div className="mr-2">1</div>
        <div class=" w-24 h-2 bg-gray-200 rounded-full">
          <div
            class="h-2 bg-primary rounded-full"
            style={{ width: `${rating1}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default LineChart;
