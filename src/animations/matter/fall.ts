import Matter from "matter-js";
const Engine = Matter.Engine,
     Render = Matter.Render,
     Runner = Matter.Runner,
     Bodies = Matter.Bodies,
     Mouse = Matter.Mouse,
     Composite = Matter.Composite,
     MouseConstraint = Matter.MouseConstraint,
     World = Matter.World;

export const fallSync = (elem: Element, arrayofimages: Array<string>) => {
     const observer = new window.IntersectionObserver(
          (entries) => {
               entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                         setTimeout(() => {
                              observer.disconnect();
                         }, 1000);
                         const canvas = elem.querySelector("canvas") as HTMLCanvasElement;
                         const engine = Engine.create();
                         engine.timing.timeScale = 0.8;
                         engine.gravity.y = 0.8;
                         const render = Render.create({
                              canvas: canvas,
                              engine: engine,
                              options: {
                                   wireframes: false,
                                   background: "transparent",
                                   showAngleIndicator: false,
                              },
                         });
                         const mouse = Mouse.create(render.canvas);
                         render.mouse = mouse;
                         Render.run(render);
                         const mouseConstraint: any = MouseConstraint.create(engine, {
                              mouse,
                              constraint: {
                                   render: {
                                        visible: false,
                                   },
                                   stiffness: 0.2,
                              },
                         });
                         World.add(engine.world, mouseConstraint);
                         mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
                         mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

                         Render.lookAt(render, {
                              min: { x: 0, y: 0 },
                              max: { x: 800, y: 600 },
                         });

                         const ground = Bodies.rectangle(400, 600, 810, 30, {
                              isStatic: true,
                              render: { fillStyle: "transparent" },
                         });
                         const top = Bodies.rectangle(400, 0, 810, 80, {
                              isStatic: true,
                              render: { fillStyle: "transparent" },
                         });
                         const wall1 = Bodies.rectangle(0, 200, 80, 820, {
                              isStatic: true,
                              render: { fillStyle: "transparent" },
                         });
                         const wall2 = Bodies.rectangle(800, 200, 80, 820, {
                              isStatic: true,
                              render: { fillStyle: "transparent" },
                         });
                         arrayofimages.forEach((img: string, i: number) => {
                              World.add(engine.world, [
                                   Bodies.circle(100 + i * 100, 50, 46, {
                                        render: {
                                             sprite: {
                                                  texture: img,
                                                  yScale: 1,
                                                  xScale: 1,
                                             },
                                        },
                                        restitution: 0.7,
                                        friction: 0.01,
                                        density: 0.0005,
                                   }),
                                   top,
                                   ground,
                                   wall1,
                                   wall2,
                              ]);
                         });
                         const runner = Runner.create();
                         Runner.run(runner, engine);
                         (function run() {
                              window.requestAnimationFrame(run);
                              Engine.update(engine, 1000 / 60);
                         })();
                    }
               });
          },
          {
               threshold: 0.7,
          }
     );
     observer.observe(elem);
};
