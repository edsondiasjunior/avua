type TaglineProps = {
    tagline: string;
    // className: string;
}

export default function Tagline({ tagline}: TaglineProps){
    return(
        <>
        <span className="text-[0.875rem] uppercase">{tagline}</span>
        </>
    )

}
