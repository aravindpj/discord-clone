const SidebarButtons = ({ src, text }) => {
  return (
    <div>
      <button className="flex gap-3 w-full py-[9px] pl-3 rounded-sm items-center hover:bg-discordDark-200">
        <img src={src} alt="" />
        <span>{text}</span>
      </button>
    </div>
  );
};
// in here we need to set navigation setup
export default SidebarButtons;
