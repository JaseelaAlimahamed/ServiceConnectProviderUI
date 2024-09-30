
const BottomNavBar = () => {
    return (
        <div className="fixed inset-x-0 bottom-4 flex justify-center px-3 lg:px-10">

        <div className="flex items-center justify-between w-full lg:w-4/5 px-6 md:px-16 py-3 bg-tabbgcolor shadow-boxshadow-1 rounded-2xl">
            {/* Dashborad Button */}
            <button>
                <img src="/dashboard-icon.svg" alt="dashboard" />
            </button>
            {/* Saved Button */}
            <button>
                <img src="/saved-icon.svg" alt="saved" />
            </button>
            {/* Reload/Redo Button */}
            <button>
            <img src="/reload-icon.svg" alt="reload" />
            </button>
            {/* Profile Button */}
            <button>
            <img src="/profile-icon.svg" alt="profile" />
            </button>
            {/* Add/New Button */}
            <button>
            <img src="/plus-icon.svg" alt="add new" />
            </button>
            {/* Help/Info Button */}
            <button>
            <img src="/help-icon.svg" alt="help" />
            </button>
        </div>
        </div>
    );
};

export default BottomNavBar;