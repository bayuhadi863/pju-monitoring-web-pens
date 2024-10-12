import { SidebarLinkDataType } from '@/lib/types/sidebar-types';
import React, { useState } from 'react';
import SidebarLink from './sidebar-link';
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';

type SidebarLinksProps = {
  links: SidebarLinkDataType[];
  fontWeight?: string;
};

const SidebarLinks: React.FC<SidebarLinksProps> = ({ links, fontWeight }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pendingDeleteLink, setPendingDeleteLink] = useState<SidebarLinkDataType | null>(null);

  const handleDeleteClick = (link: SidebarLinkDataType) => {
    setPendingDeleteLink(link);
    setIsDialogOpen(true);
  };

  const confirmDelete = () => {
    if (pendingDeleteLink) {
      pendingDeleteLink.onRemove!();
      setPendingDeleteLink(null);
    }
    setIsDialogOpen(false);
  };

  const cancelDelete = () => {
    setPendingDeleteLink(null);
    setIsDialogOpen(false);
  };

  return (
    <>
      <ul>
        {links.map((link) => (
          <li key={link.to} className='flex justify-between'>
            <SidebarLink
              to={link.to}
              icon={link.icon}
              className='mb-1'
              fontWeight={fontWeight}
              rightSection={
                link.removeIcon && (
                  <button
                    onClick={() => handleDeleteClick(link)}
                    className='text-red-600 hover:text-red-500 dark:text-red-700 text-lg dark:hover:text-red-600 transition-colors'
                  >
                    {link.removeIcon}
                  </button>
                )
              }
            >
              <div>{link.label}</div>
            </SidebarLink>
          </li>
        ))}
      </ul>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-lg font-semibold">Confirm Deletion</DialogTitle>
            <DialogDescription className="text-sm">
              Are you sure you want to delete this conversation?
              <br />
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <div className="flex w-full gap-2 sm:w-auto">
              <Button variant="outline" onClick={cancelDelete} className="flex-1 sm:flex-none">
                Cancel
              </Button>
              <Button variant="destructive" onClick={confirmDelete} className="flex-1 sm:flex-none">
                Yes, Delete
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SidebarLinks;
