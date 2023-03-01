// Button component 
const Button = () => {
    let count = 0;
    // function to count
    const Count = () => {
        count++;
        alert(count);
    }

    return (
        <button onClick={Count} className="btn btn-lg btn-primary btn-block">Click to Count!</button>
    )
}

// no need to export component