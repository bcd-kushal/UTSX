import { ChildrenType, ClassNameType } from "@/common/types/reactTypes";

export default function MaxWidthWrapper({
  children,
  className
}: {
  children: ChildrenType;
  className?: ClassNameType;
}) {
  return (
    <div
      className={`w-device min-[1200px]:w-[1200px] relative left-1/2 -translate-x-1/2 ${className || ""}`}
    >
      {children}
    </div>
  );
}
