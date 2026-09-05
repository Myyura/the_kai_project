---
sidebar_label: '2026年2月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Operations-Research.Combinatorial-Optimization.Minimum-Spanning-Tree
  - Computer-Science.Programming.Type-Checking-and-Type-Inference
  - Computer-Science.Computer-Architecture.Out-of-Order-Execution
  - Operations-Research.Metaheuristics.Simulated-Annealing
  - Data-Science-Artificial-Intelligence.Machine-Learning.Stochastic-Gradient-Descent
  - Mathematics.Linear-Algebra.Affine-Transformation
  - Electrical-Electronic.Control-Theory.Proportional-Integral-Derivative-and-Integral-Proportional-Derivative-Control
  - Computer-Science.Operating-Systems.Inter-Process-Communication
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2026年2月実施 筆記試験 第3問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

### Memorized version (English)

Select **four items** out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines. If necessary, use examples, figures or equations.

1. MST and an algorithm for finding it
2. Type checking and type inference
3. Out-of-order execution
4. Simulated annealing and its applications / formulations
5. Stochastic Gradient Descent
6. Affine transformation
7. PID control, and the roles of its components: "P", "I", and "D"
8. Inter-process Communication

### 题目描述

从下列八个信息系统主题中任选四个，每个用约 4～8 行说明；必要时可使用示例、图或公式。

1. 最小生成树及一种求解算法。
2. 类型检查与类型推断。
3. 乱序执行。
4. 模拟退火及其应用或形式化描述。
5. 随机梯度下降。
6. 仿射变换。
7. PID 控制及 $P,I,D$ 三个环节的作用。
8. 进程间通信。

## **Kai**

### 1) Minimum spanning tree and Kruskal's algorithm

A minimum spanning tree of a connected, undirected weighted graph connects all vertices without cycles and minimizes the sum of its edge weights. Kruskal's algorithm sorts edges by increasing weight and adds an edge exactly when its endpoints belong to different connected components. A disjoint-set structure maintains these components; stop after selecting $|V|-1$ edges. Each accepted edge is a minimum-weight edge across a cut separating its current components, so the cut property guarantees a minimum spanning tree. Sorting dominates the running time, $O(|E|\log|E|)$. Equal weights may yield several optimal trees; a disconnected graph instead has a minimum spanning forest.

### 2) Type checking and type inference

Type checking verifies that expressions satisfy a language's typing rules, such as requiring numeric operands for numeric addition or matching function arguments with parameter types. Static checks run before execution; dynamic checks run as operations execute. Type inference determines omitted types from constraints rather than requiring every type to be written explicitly. For example, in a language where `+` is integer addition, `fun x -> x + 1` has type `int -> int`. Unification solves equality constraints between types in Hindley–Milner-style inference. Type inference and type checking complement each other: inferred types still have to satisfy the typing rules.

### 3) Out-of-order execution

A processor may execute a later instruction before an earlier one when its operands and execution unit are ready. This uses instruction-level parallelism to hide latencies, such as an earlier cache miss, while preserving the program's architectural behavior. Register renaming removes false write-after-read and write-after-write dependencies; true read-after-write dependencies must still be respected. Reservation stations or an issue queue track readiness. A reorder buffer normally commits results in program order, enabling precise exceptions and recovery from branch mispredictions. Memory operations require additional dependency and memory-order checks; execution order is distinct from architectural commit order.

### 4) Simulated annealing

Simulated annealing minimizes an objective $E(x)$ by proposing neighboring states and accepting improvements. With a symmetric proposal rule, an uphill change $\Delta E>0$ is accepted with probability $\exp(-\Delta E/T)$, where $T>0$ is a temperature parameter. A high initial temperature permits escapes from local minima; lowering it gradually favors better states. For a traveling-salesperson problem, a state is a tour, $E$ is its length, and reversing a tour segment provides a neighborhood move. A practical finite cooling schedule does not guarantee the global optimum; convergence results require additional conditions and sufficiently slow cooling. Both the neighborhood and cooling schedule affect performance.

### 5) Stochastic gradient descent

For an empirical objective $F(\theta)=N^{-1}\sum_{i=1}^N\ell_i(\theta)$, stochastic gradient descent samples an example $i_t$ uniformly and updates $\theta_{t+1}=\theta_t-\eta_t\nabla\ell_{i_t}(\theta_t)$. The sampled gradient is an unbiased estimate of the full gradient when sampling is independent of the current iterate conditional on the data. A mini-batch averages several sampled gradients to reduce variance. Each update is cheaper than a full-data gradient, but sampling noise requires an appropriate learning-rate schedule. For example, linear regression uses the gradient of a sampled squared residual. Convexity, smoothness, noise and step-size assumptions determine convergence guarantees; a general nonconvex objective need not reach a global minimum.

### 6) Affine transformation

An affine transformation has the form $y=Ax+b$, combining a linear transformation and translation. In homogeneous coordinates it becomes

$$
\begin{pmatrix}y\\1\end{pmatrix}
=\begin{pmatrix}A&b\\0&1\end{pmatrix}
\begin{pmatrix}x\\1\end{pmatrix}.
$$

It preserves affine combinations: if $\sum_i\alpha_i=1$, then $f(\sum_i\alpha_ix_i)=\sum_i\alpha_if(x_i)$. Thus it preserves collinearity and ratios along a line, provided the line is not collapsed; an invertible affine map also preserves parallelism. Rotations, scalings, shears, and translations are examples. Lengths and angles are generally changed. For square $A$, the map is invertible exactly when $\det A\ne0$, in which case $x=A^{-1}(y-b)$.

### 7) PID control

With reference $r(t)$, measured output $y(t)$, and error $e(t)=r(t)-y(t)$, the ideal controller is

$$
u(t)=K_Pe(t)+K_I\int_0^t e(\tau)\,d\tau+K_D\frac{de(t)}{dt}.
$$

The proportional term reacts to the current error and improves responsiveness, but excessive gain may cause oscillation or instability. The integral term accumulates error and can eliminate a constant steady-state error when the closed loop is stable and the actuator can supply the required input; saturation can cause integrator windup. The derivative term responds to the rate of change and can improve damping, but amplifies measurement noise. Practical controllers filter the derivative and often differentiate the measurement to avoid setpoint kicks. Gain tuning and anti-windup mechanisms are important for stable operation.

### 8) Inter-process communication

Inter-process communication lets processes exchange data and coordinate despite having separate virtual address spaces. Pipes, message queues and sockets transfer messages through defined interfaces; sockets can also connect processes on different machines. Shared memory maps the same underlying memory into multiple processes and can avoid repeated bulk copying, but concurrent access requires synchronization such as mutexes or semaphores. Signals provide asynchronous notifications with limited payloads. For example, a producer writes records into a shared ring buffer while a semaphore indicates available records to a consumer. Permissions, message boundaries, synchronization and failure handling are part of the protocol design.
