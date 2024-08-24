function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <nav className="bg-blue-400 text-white">The Auth Navbar</nav>
      {children}
    </div>
  );
}

export default AuthLayout;