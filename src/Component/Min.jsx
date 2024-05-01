const Min = ({min}) => {
    return (
        <>
            <div className="counterItem">
                <div>
                    {min>=10&&(<h1>{min}</h1>)}
                    {min<10&&(<h1>0{min}</h1>)}
                </div>
                <h3>Minutes</h3>
            </div>
        </>
    )

};

export default Min;