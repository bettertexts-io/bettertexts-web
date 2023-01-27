import clsx from "clsx";

type Tab = {
  id: string;
  name: string;
};

export default function TabGroup({
  tabs,
  selectedId,
  selectTab,
}: {
  tabs: Tab[];
  selectedId: string;
  selectTab: (id: string) => void;
}) {
  return (
    <div>
      <nav className="flex space-x-4" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => selectTab(tab.id)}
            type="button"
            id={tab.id}
            className={clsx(
              selectedId === tab.id
                ? "bg-blue-100 text-blue-700"
                : "text-gray-500 hover:text-gray-700",
              "px-3 py-2 font-medium text-sm rounded-md"
            )}
            aria-current={selectedId === tab.id ? "page" : undefined}
          >
            {tab.name}
          </button>
        ))}
      </nav>
    </div>
  );
}
