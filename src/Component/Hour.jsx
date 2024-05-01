const Hour = ({hour}) => {
    return (
        <>
            <div className="counterItem">
                <div>
                    {hour>=10&&(<h1>{hour}</h1>)}
                    {hour<10&&(<h1>0{hour}</h1>)}
                </div>
                <h3>Hours</h3>
            </div>
        </>
    )

};

export default Hour;