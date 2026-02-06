type TaglineProps = {
    text: string;
    className?: string;
}

export default function Tagline({ text, className}: TaglineProps){
    return(
        <>
        <span className={className}>{text}</span>
        </>
    )

}
