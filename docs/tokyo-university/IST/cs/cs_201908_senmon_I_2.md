---
sidebar_label: "2019年8月実施 専門科目I 問題2"
sidebar_position: 26
tags:
  - Tokyo-University
  - Operating-System
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目I 問題2

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
The following C code models the behavior of each philosopher in the dining philosophers problem.

```c
void philosopher(int i) {
  do {
    pickup(i);
    eat();
    putdown(i);
    think();
  } while (1);
}
```

There are five threads running concurrently on a multiprocessor system, each of which executes the `philosopher` function. The argument $i$ is the index of each thread, where $i = 0, 1, \dots, 4$. In the `philosopher` function, the `eat` and `think` functions are executed in turn repeatedly, while the `pickup` and `putdown` functions are used for synchronization between threads, respectively, before and after the execution of the `eat` function so that two philosophers sitting side by side (namely, the $i$-th and the $(i + 1) \% 5$-th threads for each $i = 0, 1, \dots, 4$) cannot simultaneously execute the `eat` function. Now consider the problem of implementing the `pickup` and `putdown` functions, using binary semaphores. Here, the P and V operations on a binary semaphore X are respectively expressed as `wait(X)` and `signal(X)` in C code, and the counter value of each binary semaphore is initialized to 1. Also, assume that the `eat` and `think` functions never cause a side effect that may influence the outside of each function.

Answer the following questions.

(1) For each $i = 0, 1, \dots, 4$, let $R[i]$ be a binary semaphore. A deadlock may occur when the following `pickup` and `putdown` functions are used. Describe how such a deadlock may occur.

```text
void pickup(int i) {
  wait(R[i]);
  wait(R[(i + 1) % 5]);
}

void putdown(int i) {
  signal(R[i]);
  signal(R[(i + 1) % 5]);
}
```

(2) For each $i = 0, 1, \dots, 4$, let $S[i]$ be a binary semaphore, and `state[i]` be a shared variable that represents the state of the $i$-th thread. Also, let `mutex` be a binary semaphore that is used to achieve a mutual exclusion on all the threads. In order for at least one thread to be able to execute the `eat` and `think` functions repeatedly without a deadlock, the `pickup` and `putdown` functions are redefined as follows. The void-type `test` function sets `state[i]` to `eating` and calls the `signal` function for $S[i]$, if a certain condition is satisfied. Describe the `test` function using C code. Note that you need not consider starvation of each thread. Also, assume that the initial value of `state[i]` is `thinking`.

```text
enum {thinking, eating, waiting} state[5];

void pickup(int i) {
  wait(mutex);
  state[i] = waiting;
  test(i);
  signal(mutex);
  wait(S[i]);
}

void putdown(int i) {
  wait(mutex);
  state[i] = thinking;
  test((i + 4) % 5);
  test((i + 1) % 5);
  signal(mutex);
}
```

(3) Regarding the C code in question (2), answer whether or not a thread may suffer from starvation, assuming that any enabled thread is eventually scheduled. If your answer is "yes", describe how the starvation occurs and briefly explain how to modify the code to avoid the starvation. If your answer is "no", then explain the reason.

## **Kai**
### (1)

In the given `pickup` and `putdown` functions, a deadlock may occur due to the circular wait condition. Here's the explanation:

1. **Circular Wait Condition**:
    - Each philosopher tries to pick up their left fork first by executing `wait(R[i])`.
    - After picking up the left fork, each philosopher tries to pick up the right fork with `wait(R[(i + 1) % 5])`.
2. **Deadlock Scenario**:
    - Suppose all philosophers pick up their left forks simultaneously, i.e., Philosopher 0 picks up fork 0, Philosopher 1 picks up fork 1, and so on.
    - Then, each philosopher tries to pick up their right fork, which is already held by the next philosopher. For example, Philosopher 0 waits for fork 1 (held by Philosopher 1), Philosopher 1 waits for fork 2 (held by Philosopher 2), and so on.
    - As a result, all philosophers are stuck waiting for a fork that will never become available, causing a deadlock.

### (2)

To avoid deadlock, we redefine the `pickup` and `putdown` functions using a different synchronization mechanism. The `test` function is called to check if a philosopher can start eating.

```c
void test(int i) {
  if (state[i] == waiting &&
      state[(i + 4) % 5] != eating &&
      state[(i + 1) % 5] != eating) {
    state[i] = eating;
    signal(S[i]);
  }
}
```

**Explanation**:
- The `test` function checks if the philosopher `i` is in the `waiting` state and both neighbors are not `eating`.
- If both conditions are met, the philosopher can proceed to eat by setting `state[i]` to `eating` and signaling the semaphore `S[i]` so that the philosopher can continue past `wait(S[i])` in the `pickup` function.

### (3)

**No, starvation cannot occur under the provided solution**. Here's why:

- The solution ensures that if a philosopher wants to eat and their neighbors are not eating, they will eventually be allowed to eat. The `mutex` ensures that only one philosopher can change the state at a time, preventing race conditions. Since any philosopher can only start eating if both neighbors are not eating, there will always be at least one philosopher able to eat if others are not eating.
- Additionally, since all philosophers can continuously cycle between eating and thinking, each philosopher will eventually get a chance to eat when they are hungry. This is because once a philosopher finishes eating, they will release the forks (signal semaphores) and set their state to `thinking`, allowing the next waiting philosopher to eat.

## **Knowledge**

并发控制 死锁 信号量 哲学家进餐问题 操作系统

### 难点思路

死锁的分析和避免是本题的难点之一。在分析死锁时，要考虑资源的分配和等待的顺序，并且必须设计机制来打破循环等待条件。

**Note**: 为什么 (2) 的 `pickup` 中会出现先 `V(S[i])` 再 `P(S[i])` 的情况？

1. 快速通过的情况：
   - 如果哲学家进入 `pickup` 函数时，恰好他的两个邻居都没有在吃饭，那么 `test(i)` 函数会立即调用 `signal(S[i])`。
   - 这样，当执行到 `wait(S[i])` 时，它会立即通过，哲学家可以开始吃饭。
   - 这种情况下，哲学家几乎没有等待就获得了开始吃饭的许可。

2. 等待的情况：
   - 如果有邻居正在吃饭，`test(i)` 函数不会调用 `signal(S[i])`。
   - 这时，哲学家会在 `wait(S[i])` 处阻塞。
   - 当邻居吃完饭执行 `putdown` 时，会调用 `test` 函数检查等待的哲学家。
   - 如果条件满足（比如这个等待的哲学家的另一个邻居也没在吃饭），then `signal(S[i])` 会被调用，唤醒等待的哲学家。

这个机制的巧妙之处在于：

1. 它允许哲学家在条件满足时快速获取资源（叉子）。
2. 当条件不满足时，它能让哲学家有效地等待，而不会占用 `mutex` 锁。
3. 它保证了系统的活性（liveness），因为每次有哲学家放下叉子时，都会检查是否可以唤醒等待的邻居。

这种设计体现了并发编程中的一个重要原则：尽可能减少持有锁的时间，以提高并发性。通过将 " 等待条件满足 " 的操作（`wait(S[i])`）放在释放 `mutex` 之后，系统允许其他哲学家在这期间改变他们的状态。

### 解题技巧和信息

1. **避免死锁**: 要避免死锁，可以打破循环等待、占有且等待、不可剥夺条件中的至少一个。通过规定一个哲学家先尝试获取编号小的叉子，再获取编号大的叉子，或者使用信号量控制最多只有四个哲学家可以同时拿起叉子来避免死锁。
2. **信号量使用**: 使用二元信号量来保证临界区的互斥访问，以及实现条件同步。

### 重点词汇

1. **Semaphore (信号量)**: A synchronization primitive used to control access to a common resource.
2. **Deadlock (死锁)**: A situation where a set of processes are blocked because each process is holding a resource and waiting for another resource.
3. **Starvation (饥饿)**: A situation where a process is perpetually denied necessary resources to proceed.

### 参考资料

1. A. Silberschatz, P. B. Galvin, and G. Gagne, *Operating System Concepts*, 9th Edition, Chapter 7: "Deadlocks".
