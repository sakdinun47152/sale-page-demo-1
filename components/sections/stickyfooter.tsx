import { Button } from "../ui/button";

export const StickyFooter = () => {
  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        w-full
        bg-white
        border-t
        border-gray-200
        p-4
        shadow-[0_-4px_20px_rgba(0,0,0,0.1)]
        z-50
        md:hidden
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
        "
      >

        <div
          className="
            flex
            flex-col
          "
        >
          <span
            className="
              text-xs 
              text-gray-500
              line-through
            "
          >
            ปกติ 1,990.-
          </span>

          <span
            className="
              text-xl
              font-bold 
              text-red-600
            "
          >
            990.-
          </span>
        </div>

        <Button
          className="
            flex-1
            shadow-none
          "
        >
          ทักแชท / สั่งซื้อเลย
        </Button>
      </div>
    </div>
  );
};