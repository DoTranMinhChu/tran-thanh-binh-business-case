
export default function DefaultFooter() {
    return (
        <>
            <footer className="px-2 mx-auto bg-gray-300 sm:px-6 lg:px-8">
                <div className="py-8 m-auto text-center">
                    <p>@{new Date().getFullYear()} Copyright</p>
                </div>
            </footer >
        </>
    )
}