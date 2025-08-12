import "server-only";


export const serverSideFunction = () => {
    console.log(
        `use multiple libraries,
            use enviroment varibles
            interact with a database
            process confidential information`
    );
    return 'server result';
}