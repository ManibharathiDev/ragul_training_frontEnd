const Header = () =>{

    const styles = {
        "backgroundColor":"#FF0000",
                "color":"#FFFFFF",
                "padding":"10px",
                "textAlign":"center",
    }

    return(
        <>
           <h1 style={{
                "backgroundColor":"#FF0000",
                "color":"#FFFFFF",
                "padding":"10px",
                "textAlign":"center",
            }}>This is My Header Page</h1>

            <h1 style={styles}>
                Welcome to my course
            </h1>    

        </>
    );
}
export default Header;