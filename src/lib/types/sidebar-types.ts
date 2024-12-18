export interface SidebarLinkDataType {
  to: string;
  label: string;
  icon?: React.ReactNode;
  removeIcon?: React.ReactNode;
  onRemove?: () => void;
  isTargetBlank?: boolean;
  targetUrl?: string;
}