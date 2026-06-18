
export function OptionSection() {
  return (
    <div className="flex items-center justify-between  w-full p-3 bg-[#011222] text-white shadow-sm">
      <div className="font-bold text-4xl ml-4">
        DormDuo
      </div>

      <div className="flex flex-row w-full md:w-1/5 justify-between gap-1 px-2 bg-black text-white rounded-full overflow-hidden wrap">

      <button className="px-2 text-sm font-bold rounded hover:[animation:upDown_0.5s_ease-in-out_1]">
        Find A Match
      </button>

        <button className="px-2 text-sm font-bold rounded hover:[animation:upDown_0.5s_ease-in-out_1]">
          Match History
        </button>

        <button className="px-2 text-sm font-bold rounded hover:[animation:upDown_0.5s_ease-in-out_1]">
          Profile
        </button>
      </div>
    </div>
  );
}