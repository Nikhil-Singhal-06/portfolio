---
title: 'Practical Architectures for Robot Behaviors: FSMs, BTs, and Hybrid Models'
description: 'A grounded look at how robot behavior architectures are built in practice, from classical FSMs to modular Behavior Trees and hybrid models. Covers real ROS 2 frameworks, tools, and examples you’ll actually encounter when building autonomous systems.'
date: '2025-06-07'
image: fsm-bt-robotics-thumbnail.webp
tags:
  - Robotics
  - ROS2
  - BehaviorTrees
  - FiniteStateMachines
  - Architecture
published: true
toc:
  [
    { id: 'intro', label: '📘 Introduction' },
    { id: 'fsm-experiences', label: '⚙️ Real-World FSM Usage' },
    { id: 'bt-experiences', label: '🌲 Behavior Trees in Practice' },
    { id: 'decision-framework', label: '🧠 Decision-Making Framework' },
    { id: 'hybrid-approach', label: '🔁 The Hybrid Approach' },
    { id: 'conclusion', label: '🧭 Final Thoughts' },
    { id: 'resources', label: '📚 Resources' }
  ]
minutesRead: 9
---

## 📘 Introduction

<a id="intro"></a>

Designing autonomous robots isn’t just about writing control code: it’s about choosing the right behavior architecture. This decision silently shapes everything: how your robot handles real-world uncertainty, how you debug issues, how quickly your team can scale complexity, and whether your system holds up outside a clean demo.

For years, Finite State Machines (FSMs) have been the go-to choice for orchestrating robotic behaviors: clear, deterministic, and easy to grasp. But as robots step into messier, more dynamic environments, FSMs start to crack, and that's where Behavior Trees (BTs) enter the picture, offering modularity, reactivity, and cleaner scaling.

If you've worked with frameworks like Nav2, FlexBE, SMACC2, or BehaviorTree.CPP, you've likely encountered both FSMs and BTs, sometimes in the same stack. But how do these paradigms actually compare in practice? Which one makes sense for your robot, and when is a hybrid model the real answer?

This post is a hands-on look at real-world robot behavior architectures: not just theory, but what’s actually used in ROS 2 systems today. We'll break down how FSMs and BTs work, where they shine, where they break, and how modern systems blend them together. Whether you’re building a delivery bot, an industrial manipulator, or just trying to avoid spaghetti logic, this guide will help you make better architectural decisions.

## ⚙️ Section 1: Real-World Experiences with FSMs – What Actually Happens in the Field <a id="fsm-experiences"></a>

Finite State Machines (FSMs) have been a backbone of robotic control systems for decades and for good reason. They're easy to visualize, quick to implement, and give developers explicit control over how the system transitions between behaviors. Their predictability makes them a natural fit for safety-critical and time-sensitive logic.

FSMs continue to power everything from low-level control loops to high-level task flows in real ROS 2 systems - especially in environments where structure and determinism matter.

### What Is an FSM?

At its core, a **Finite State Machine (FSM)** is a set of defined **states** and **transitions**. At any given moment, the system is in exactly one state. Based on events or sensor input, it moves to a new state through a transition.

A typical FSM might look like:

```
[Idle] - (goal_received) -> [Navigate]
|
(battery_low)
↓
[Recharge]
```

- Each **state** encapsulates specific control behavior (e.g., navigation, waiting, docking).
- **Transitions** are conditionally triggered: based on topics, timers, or internal flags.
- The execution model is **deterministic**: only one state runs at a time, and transitions are predefined.

FSMs are ideal when you want **tight control**, clear execution paths, and safety guarantees.

### When FSMs Work Really Well

- **Tightly scoped behaviors**  
  Simple tasks like docking, elevator logic, or tool activation are where FSMs shine, especially if they're deterministic and environment assumptions rarely change.

- **Real-time responsiveness**  
  FSMs let you write fast, tightly bounded logic for time-sensitive behaviors (e.g. switching between modes based on sensor input).

- **Safety-critical systems**  
  When you need to formally verify that "A only ever leads to B," FSMs are the clearest choice.

- **Runtime editing with FlexBE**  
  Tools like <a href="https://github.com/FlexBE/flexbe_webui">FlexBE’s Web UI</a> allow for modifying FSM logic live, which is especially helpful in field testing where conditions can't always be predicted in advance.

### How Teams Actually Structure FSMs in ROS

When basic FSMs start to grow, teams often adopt **Hierarchical FSMs (HFSMs)** - where states themselves can contain other FSMs. This allows behavior logic to be layered, encapsulated, and reused without creating one giant flat state machine. FSMs in modern ROS systems are rarely flat or linear. **HFSMs** are often used to control complexity. Here's a common structure:

- **Top-Level States**: Mission modes like `Explore`, `Deliver`, `Recharge`.
- **Nested FSMs**: Inside `Deliver`, you might have sub-FSMs like `NavigateToPickup → Pickup → NavigateToDropoff → Dropoff`.
- **Transition Triggers**: ROS topics, actions, and service responses often trigger transitions (e.g. `goal_reached`, `battery_low`, or `pickup_failed`).

This layered design helps, but it doesn't eliminate the risk of **state explosion** - especially when transitions need to cross boundaries or respond to shared events.

### Where Things Start to Break

- **Unscalable transitions**  
  As the number of environmental conditions grows, it's tempting to add more states to "cover every case." This makes transitions fragile and logic hard to follow.

- **Parallel behavior = pain**  
  Want your robot to navigate while listening for a cancel request? You'll probably need multiple FSMs running in parallel, and managing their coordination is error-prone.

- **Poor reusability**  
  A sub-FSM designed for one mission may be hard to reuse in another unless you decouple it carefully (which isn't trivial).

### 🛠 Tools You’ll Encounter

- **SMACC2**  
  A powerful FSM framework in ROS 2 with support for orthogonal regions (parallel states), event-driven transitions, and advanced introspection. Great for experienced C++ devs, but has a learning curve. More details can be found on the <a href="https://github.com/robosoft-ai/SMACC2">SMACC2 GitHub repository</a> and its <a href="https://smacc.dev/orthogonals/">Orthogonals documentation</a>.

- **FlexBE**  
  Designed for mixed teams of developers and operators, FlexBE offers runtime-editable FSMs and a user-friendly Web UI, which are particularly valuable during field deployments. However, debugging multi-layered behaviors can become complex. For more information, refer to the <a href="https://github.com/FlexBE/flexbe_webui">FlexBE WebUI GitHub repository</a> and the <a href="https://flexbe.readthedocs.io/en/latest/">FlexBE documentation</a>.

- **ROSCo**  
  A research-focused system using HFSMs for complex assistive robotics. Demonstrates how FSMs can scale with abstraction, but only if carefully managed. Detailed insights are available in the <a href="https://repository.gatech.edu/server/api/core/bitstreams/01851ef1-6791-4380-9f68-46cba7d04d5f/content">ROSCo research paper</a>.

FSMs remain a solid, production-tested foundation - particularly when your behaviors are well understood in advance. But once your robot starts reacting to the world instead of following a plan, the architecture may need help - and that’s where Behavior Trees often step in.

---

## 🌲 Section 2: Behavior Trees in Practice – Flexibility That Scales (But at a Cost) <a id="bt-experiences"></a>

**Behavior Trees (BTs)** offer a powerful way to build robotic behaviors that are modular, reactive, and extensible. Originally developed in the gaming industry, BTs have gained serious traction in robotics - especially in ROS 2 systems. Tools like `BehaviorTree.CPP` and the `Nav2 BT Navigator` have helped standardize BT usage across navigation, task planning, and interaction layers.

Instead of wiring together state transitions, BTs let you compose behaviors from building blocks that are easier to visualize, reuse, and adapt — especially in robots that operate in dynamic or unpredictable environments.

But with all that flexibility comes complexity. To use BTs effectively, it helps to understand both how they work and where they tend to trip teams up.

### What Is a Behavior Tree?

A **Behavior Tree (BT)** is a tree-like structure where each node represents a specific type of behavior. It is **ticked** from the root down on a regular basis, and the outcome of each node controls the tree’s flow.

Here’s a simple tree layout:

```
[Root]
├── Sequence
│ ├── IsBatteryOK?
│ ├── NavigateToGoal
│ └── AnnounceArrival
```

- **Control nodes** (like Sequence, Selector) determine flow logic.
- **Condition nodes** check preconditions (like “Is battery OK?”).
- **Action nodes** run tasks (like “Navigate to goal”).

A Sequence succeeds if **all** its children succeed. A Selector succeeds if **any one** child succeeds.  
This lets you **compose fallback, retry, and conditional behavior** without writing custom transitions.

BTs are reactive, hierarchical, and data-driven by design, making them well suited for modern robot behavior stacks.

### Where BTs Really Shine

- **Complex, reactive logic**  
  BTs let you build hierarchical behaviors that can adapt quickly to feedback (like obstacle detection or failed pickups), making them great for unstructured environments.

- **Modular reuse**  
  Subtrees can be reused across different robots or missions, ideal for teams managing multiple platforms or iterating quickly.

- **Separation of concerns**  
  Logic is cleanly separated into action, condition, and control nodes. You don't have to rewrite transitions, just rearrange the tree.

- **Visual design and debugging**  
  Tools like `Groot` make it possible to build and debug BTs visually. This is especially useful in collaborative environments or when reviewing behavior with non-engineers.

### Common Pain Points

- **Steep initial learning curve**  
  Developers often struggle with understanding node types (e.g., selectors vs sequences), tick cycles, and control flow, especially for teams new to BTs or unfamiliar with their control flow semantics.

- **Deep nesting can hurt readability**  
  Complex BTs can become hard to trace, especially when failures cascade or feedback loops are implicit.

- **Debugging async behaviors**  
  While BTs allow for better reactivity, managing async behaviors (like preemption or interruption) takes careful design and understanding of node lifecycle.

### 💬 Real-World Insight: Nav2 & BTs in ROS 2

One of the most widely used applications of Behavior Trees in robotics today is the **Nav2 stack**, which uses BTs for task orchestration (e.g., navigate, recover, replan). The team behind Nav2 explicitly chose BTs over FSMs to enable modular task switching and robust fallback behavior.

> 📎 From [Nav2 docs](https://docs.nav2.org/behavior_trees/index.html):  
> "Behavior Trees enable composing modular and reactive navigation strategies that adapt to dynamic environments."

BTs in Nav2 control flows like:

- Attempting a path plan
- Switching to recovery behavior if the path fails
- Retrying navigation after clearing costmaps

This level of adaptability would be significantly more complex to implement cleanly in a pure FSM.

### 🛠 Tools You'll Encounter

- **BehaviorTree.CPP**  
  The core C++ library used in Nav2 and many ROS 2 robots. Offers extensible nodes, decorators, and robust runtime support. Steeper to learn, but powerful once mastered.  
  [GitHub repo](https://github.com/BehaviorTree/BehaviorTree.CPP)

- **Groot**  
  A GUI editor for Behavior Trees (integrated with `BehaviorTree.CPP`). Useful for designing and debugging large trees visually.  
  [Groot repo](https://github.com/BehaviorTree/Groot)

- **Nav2 BT Navigator**  
  Uses BTs to control the navigation pipeline in ROS 2. Great real-world example of BTs coordinating perception, planning, and control.  
  [Docs](https://docs.nav2.org/behavior_trees/index.html)

BTs can take time to master, but they enable a level of modularity and reactivity that’s hard to match - especially as robot behavior grows more complex.

---

## 🧠 Section 3: Choosing Between FSMs and BTs - A Practical Decision Framework <a id="decision-framework"></a>

FSMs and BTs both have valid, powerful roles in robot behavior design, but they come with very different trade-offs. This section gives you a practical lens for choosing between them (or combining both) based on the kinds of systems you're building, your team's skillset, and your runtime requirements.

### Quick Reference Table

| Criteria                   | Choose FSM if...                                    | Choose BT if...                                        |
| -------------------------- | --------------------------------------------------- | ------------------------------------------------------ |
| **Behavior complexity**    | You have a limited, well-scoped task flow.          | Your system must adapt to changing conditions.         |
| **Modularity / reuse**     | Your tasks are one-off or not shared across robots. | You want reusable, composable behavior trees.          |
| **Reactivity / fallbacks** | You handle most exceptions with external logic.     | You need integrated fallbacks and recovery.            |
| **Team experience**        | Team is familiar with FSM logic and tools.          | Team is open to learning BT concepts.                  |
| **Real-time performance**  | You need strict timing guarantees.                  | Slight flexibility in execution is acceptable.         |
| **Tooling needs**          | You want strong runtime editing or simplicity.      | You want modular visual design and runtime monitoring. |

### Real-World Use Case Guidance

- **Use FSMs when...**  
  You're working on well-defined, predictable tasks: industrial arms, assembly line tasks, indoor delivery in mapped spaces. FSMs offer deterministic transitions and are easier to test in tightly scoped environments.

- **Use BTs when...**  
  Your robot must react to failure, navigate dynamic environments, or switch strategies mid-task: think mobile manipulation, hospital robots, or multi-stage navigation with obstacle recovery.

- **You'll likely need both when...**  
  You're operating in hybrid domains, like drones with auto-landing logic or warehouse robots that blend task planning with tight sensor integration. More on hybrid design in [Section 4](#hybrid-approach).

### Flowchart: Picking an Architecture

<img src="/blogs/fsm-bt-decision-flowchart.jpg" alt="FSM vs BT Decision Flowchart" width="500">

<p style="text-align: center; font-style: italic;">
  A decision flowchart to help match your robot’s task profile to the right architecture.
</p>

This flowchart helps you walk through behavior architecture decisions based on your robot’s environment, failure handling needs, and runtime expectations.

### 💡 Pro Tip: It's Not Just Technical

Sometimes the best choice is shaped by **who's building and maintaining the robot**. If your team includes field operators, visual FSM tools like FlexBE are easier to adapt live. If you have a fast-moving dev team and lots of behavior reuse, BTs scale better long-term.

---

## 🔁 Section 4: The Hybrid Pattern – How BTs and FSMs Complement Each Other in Practice <a id="hybrid-approach"></a>

Despite all the comparisons, **real robotic systems often use both FSMs and BTs by design**. It’s not a competition, it’s about layering tools where they make the most sense

In practice, hybrid behavior architectures let you use:

- **FSMs** for low-level logic: precise, time-critical operations
- **BTs** for high-level coordination: sequencing goals, handling retries, fallback logic, etc.

### 🛠 Example Pattern: BT on Top, FSM Inside

This is the most common real-world structure:

```
[ Behavior Tree ]
├── NavigateToLocation (Action Node)
│   └── Internally calls FSM for motion mode switching
├── PickupObject (Action Node)
│   └── FSM manages grasp approach and retries
└── Fallback: RetryNavigation or Abort
```

Here, the BT orchestrates the mission:

- **BT** handles structure: What to do if planning fails, when to retry, and what sequence to follow
- **FSMs** are used inside specific nodes to implement reliable state transitions (e.g., pick, place, align)

### Why It Works

| Layer   | Best suited for...                                                |
| ------- | ----------------------------------------------------------------- |
| **BT**  | High-level task switching, modular reuse, visual planning         |
| **FSM** | Time-critical actuation, tight sensor loops, recoverable routines |

In this layered model, BTs make decisions at the strategy level, while FSMs execute the details with precision and safety.

Hybrid systems reduce complexity where BTs would become too deep or where FSMs would become unmanageable across modes. You can isolate retries, safety checks, or internal routines into FSMs while leaving mission logic in the BT.

### Real Examples

- **Nav2 + Docking:**  
  Use BT to navigate and trigger docking logic, but call an FSM-based docking routine that manages alignment, sensor feedback, and retries.

- **Arm Manipulation:**  
  BT handles the larger flow: pick, stow, place. Inside `PickupObject`, use FSM to manage approach → close gripper → retreat, handling retries locally.

- **Drones / UAVs:**  
  High-level BT handles mission logic (survey path, return to base), while FSMs manage takeoff, land, battery check, or camera state switching.

### How to Implement

In ROS 2, this pattern often shows up as:

- **BTs written in XML + BehaviorTree.CPP**
- **FSMs implemented inside ROS 2 action servers or in C++ nodes** called by BT leaves

SMACC2 is one example of a flexible FSM framework that can be embedded this way. You can wrap FSMs as reusable BT nodes or plug them into existing BT leaf nodes as custom actions.

> **Rule of thumb:**  
> **BT = "what to do"**,  
> **FSM = "how to do it carefully and predictably"**

If your BT leaf node is trying to manage more than one mode or behavior state internally, it may be time to extract that logic into an FSM.

---

## 🧭 Final Thoughts: Use the Right Tools, Not Just the Familiar Ones <a id="conclusion"></a>

If there’s one takeaway from working with both Finite State Machines and Behavior Trees in robotics, it’s this: **architecture isn’t just a technical choice, it’s a productivity multiplier or a long-term bottleneck.**

- **Finite State Machines** are fast to prototype, easy to reason about, and ideal for deterministic, safety-first systems.

- **Behavior Trees** scale better, adapt faster, and promote modular reuse, but they demand more upfront design and a shift in mindset.

And in practice, **hybrid systems** often deliver the best of both: FSMs for precise, low-level control; BTs for flexible high-level orchestration.

So instead of asking _"Which is better?"_, ask:

> **What’s the shape of our problem?**  
> **How often will this logic evolve?**  
> **Who will maintain this in 6 months?**

This blog wasn’t just about comparing patterns: it was about helping you think through what really matters when choosing an architecture. These decisions shape how fast your team moves, how painful debugging becomes, and whether your robot can grow with your ambitions.

Choose deliberately - not just based on what’s familiar.

## 📚 Further Reading & Resources <a id="resources"></a>

If you're interested in diving deeper into the theory, pitfalls, or real-world usage of FSMs and Behavior Trees, these resources are worth exploring:

- 📄 **From Finite-State Machines to Behavior Trees in Human-Robot Interaction**  
  A recent research paper outlining trade-offs, limitations, and practical migration paths from FSMs to BTs in modern robotics.  
  [View on arXiv](https://arxiv.org/abs/2405.16137)

- 🧠 **Behavior Trees in Robotics and AI: An Overview**  
  A widely cited IEEE paper that formalizes Behavior Trees, their modular design, and how they compare to FSMs and planners in both robotics and AI applications.  
  [IEEE Xplore (2017)](https://ieeexplore.ieee.org/document/7989070)

- 🔄 **Common Issues with Behavior Trees (Unreal Engine)**  
  Covers anti-patterns and misuses of BTs, especially trying to re-implement FSM behavior within BTs.  
  [Read on Epic Dev Community](https://dev.epicgames.com/community/learning/tutorials/L9vK/unreal-engine-common-issues-with-behavior-trees-and-things-you-should-competely-avoid)

- 🧪 **Nemo's Blog on Behavior Tree Internals**  
  Deep dive into how BTs actually tick, with commentary on design patterns and real-time behavior quirks.  
  [Read on nemo.cool](https://nemo.cool/1036.html)

- 🤖 **TurtleBot3 Behavior Demos (BT + FSM Examples)**  
  Real-world behavior demos using TurtleBot3 with Behavior Trees and state machine integrations in ROS 2.  
  [GitHub Repo](https://github.com/sea-bass/turtlebot3_behavior_demos)
