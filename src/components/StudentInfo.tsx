// export function StudentInfo() {
//   return (
//     // Use Drawer component to display student information
//     <div className="flex-1 p-4">
//       <button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
//         Tachit Thungcharoenkul
//       </button>
//     </div>
//   );
// }

// import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function StudentInfo() {
  // const isMobile = useIsMobile();

  // isMobile ? "down" : "right"
  const swipeDirection = "right";

  return (
    <Drawer swipeDirection={swipeDirection}>
      <DrawerTrigger
        render={
          <Button
            className="bg-blue-500 text-white hover:bg-blue-600 text-white"
            variant="secondary"
          >
            Tachit Thungcharoenkul
          </Button>
        }
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>student information</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
        </div>
        <DrawerFooter>
          <Drawer swipeDirection={swipeDirection}>
            <DrawerTrigger
              render={<Button variant="outline">Open Nested Drawer</Button>}
            />
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Nested Drawer</DrawerTitle>
                <DrawerDescription>
                  The parent drawer stays mounted behind this one.
                </DrawerDescription>
              </DrawerHeader>
              <div className="flex-1 p-4">
                <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
              </div>
              <DrawerFooter>
                <Drawer swipeDirection={swipeDirection}>
                  <DrawerTrigger
                    render={
                      <Button variant="outline">Open Third Drawer</Button>
                    }
                  />
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Third Drawer</DrawerTitle>
                      <DrawerDescription>
                        Two drawers are stacked behind this one.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="flex-1 p-4">
                      <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
                    </div>
                    <DrawerFooter>
                      <Drawer swipeDirection={swipeDirection}>
                        <DrawerTrigger
                          render={
                            <Button variant="outline">
                              Open Fourth Drawer
                            </Button>
                          }
                        />
                        <DrawerContent>
                          <DrawerHeader>
                            <DrawerTitle>Fourth Drawer</DrawerTitle>
                            <DrawerDescription>
                              This is the frontmost drawer in the stack.
                            </DrawerDescription>
                          </DrawerHeader>
                          <div className="flex-1 p-4">
                            <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
                          </div>
                          <DrawerFooter>
                            <DrawerClose
                              render={<Button variant="outline">Close</Button>}
                            />
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>
                      <DrawerClose
                        render={<Button variant="outline">Close</Button>}
                      />
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
                <DrawerClose
                  render={<Button variant="outline">Close</Button>}
                />
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <DrawerClose render={<Button variant="outline">Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
