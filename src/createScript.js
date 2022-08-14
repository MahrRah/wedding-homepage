function createScript (path){

    const script = document.createElement('script');
    script.src = path;
    script.async = true;
    script.type ="text/jsx"
    return script
}

export default createScript
