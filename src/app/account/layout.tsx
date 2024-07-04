export default function Layout({ children,test }: {
    children: React.ReactNode,
    test :React.ReactNode,
}) {
    return (
        <main>
            {children}
            {test}
        </main>
    )
}