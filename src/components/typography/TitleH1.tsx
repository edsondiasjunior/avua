type TitleH1Props = {
    title: string;
}

export default function TitleH1({title}: TitleH1Props){
    return(
        <>
        <h1 className="text-5xl text-center">{title}</h1>
        </>
    )

}
