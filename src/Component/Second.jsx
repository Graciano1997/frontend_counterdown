const Seconds = ({seconds}) => {
    return (
        <>
            <div className="counterItem">
                <div>
                    {seconds>=10&&(<h1>{seconds}</h1>)}
                    {seconds<10&&(<h1>0{seconds}</h1>)}
                </div>
                <h3>Seconds</h3>
            </div>
        </>
    )

};

export default Seconds;