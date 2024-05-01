const Day = ({day}) => {
    return (
        <>
            <div className="counterItem">
                <div>
                    {day>=10&&(<h1>{day}</h1>)}
                    {day<10&&(<h1>0{day}</h1>)}
                </div>
                <h3>Days</h3>
            </div>
        </>
    )

};

export default Day;