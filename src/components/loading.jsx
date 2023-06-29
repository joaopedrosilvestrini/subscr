import Skeleton from "react-loading-skeleton";

export default function Loading({ children, ...props }) {
    return (
        <>
            <Skeleton className="w-full" style={{ backgroundColor: "rgba(111,116,135,0.4)", backdropFilter: "blur('4px')" }} baseColor={"#00000000"} highlightColor={"#848799"} {...props}>{children}</Skeleton>
        </>
    )
}