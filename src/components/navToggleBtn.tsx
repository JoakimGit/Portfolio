const NavToggleBtn = () => {
  const handleToggleNavbar = () => {
    const sidebar = document.querySelector("#sidebar");
    if (!sidebar) return;

    if (sidebar.classList.contains("!left-0")) {
      sidebar.classList.remove("!left-0", "!w-[300px]");
      document.body.classList.remove("overflow-hidden");
    } else {
      sidebar.classList.add("!left-0", "!w-[300px]");
      document.body.classList.add("overflow-hidden");
    }
  };

  return (
    <button
      onClick={handleToggleNavbar}
      className="bg-clr-accent text-clr-light fixed right-4 top-4 z-50 h-10 w-10 rounded-full text-xl sm:hidden"
    >
      <i className="fa-solid fa-bars"></i>
    </button>
  );
};

export default NavToggleBtn;
