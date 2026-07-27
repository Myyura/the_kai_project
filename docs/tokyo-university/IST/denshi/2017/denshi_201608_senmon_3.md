---
sidebar_label: 2016年8月実施 専門 第3問
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Boyer-Moore-Majority-Vote-Algorithm
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2016年8月実施 専門 第3問

## **Author**
[adj-matrix](https://github.com/adj-matrix)

## **Description**

You want to find users from an access log that extremely frequently access to a Web service. Unique user IDs are assigned to individual users, and the access log records IDs of the users that have accessed to the service in chronological order. Answer the following questions.

(1) You want to verify whether there exists a user that occupies the majority of the accesses in the access log, without creating a kind of a frequency histogram of all the users. You have therefore conceived the following algorithm.

*   i. Prepare a list $L$ that is initialized to an empty list $\{\}$.
*   ii. Access each element in array $A$ from the beginning, and perform either of the following operations for the $i$th element $A[i]$ depending on the value of $L$ at that time.
    *   ii-(a). (If $L$ is empty) add $A[i]$ to $L$.
    *   ii-(b). (If $L$ is not empty) if $A[i]$ is included in $L$, add $A[i]$ to $L$. Otherwise, remove one arbitrary element from $L$.
*   iii. output $L$.

Use this algorithm to process the following sequence of user IDs from the first element, and show the values of $L$ in order after processing $A[i]$ in ii.

$$11, 10, 11, 11, 7, 11, 11, 3, 8$$

(2) Prove that the number of varieties of user IDs in $L$ is at most one in the algorithm in (1).

(3) If there exists a majority user $u_{\text{MAJORITY}}$ in the access log, prove that $u_{\text{MAJORITY}}$ is a unique element included in list $L$ output by the algorithm in (1).

(4) In the algorithm in (1), when the size of array $A$ is very large, the size of list $L$ may cause an issue. Keeping this in mind, show a pseudo code that implements the algorithm in (1) using a function `read_log()` that reads a user ID one by one from the access log, while improving its space efficiency by not explicitly expressing $L$ as a list.

Here, `read_log()` returns the first user ID in the access log at the first call and returns the following user IDs from the access log one by one for the following calls. `read_log()` returns $-1$ when it reaches the end of the access log.

### 题目描述

希望从 Web 服务的访问日志中找出访问次数极多的用户。每位用户有唯一 ID，日志按时间顺序记录每次访问者的 ID。回答下列问题。

(1) 为判断日志中是否存在占全部访问次数过半的用户，同时不为所有用户建立频数直方图，考虑以下算法：

1. 准备列表 $L$，初始为空列表 $\{\}$。
2. 从头依次访问数组 $A$ 的元素。处理第 $i$ 个元素 $A[i]$ 时：
   - 若 $L$ 为空，将 $A[i]$ 加入 $L$；
   - 若 $L$ 非空且 $A[i]$ 已包含在 $L$ 中，再加入一个 $A[i]$；否则从 $L$ 中任意删除一个元素。
3. 输出 $L$。

按顺序用该算法处理用户 ID 序列

$$
11,10,11,11,7,11,11,3,8,
$$

依次写出步骤 2 每次处理 $A[i]$ 后 $L$ 的值。

(2) 证明在 (1) 的算法中，$L$ 所含用户 ID 的种类数至多为 $1$。

(3) 若日志中确实存在多数用户 $u_{\mathrm{MAJORITY}}$，证明它是 (1) 的算法最终输出列表 $L$ 中唯一种类的元素。

(4) 当数组 $A$ 很大时，显式保存列表 $L$ 会造成空间问题。使用每次从日志读取一个用户 ID 的函数 `read_log()`，写出不显式表示 $L$、空间效率更高但实现同一算法的伪代码。`read_log()` 第一次调用返回日志中的第一个用户 ID，随后逐次返回后续 ID，到达日志末尾时返回 $-1$。

#### 考点

- Boyer–Moore 多数投票：要求用异类元素两两抵消的不变量证明候选种类唯一且多数元素不会被完全消去。
- 流式空间优化：要求把重复元素列表压缩为候选值与计数器，并通过 `read_log()` 单遍处理日志。

## **Kai**
### (1)

| $i$ | $A[i]$ | $L$ |
| :---: | :---: | :--- |
| 0 | 11 | `{11}` |
| 1 | 10 | `{ }` |
| 2 | 11 | `{11}` |
| 3 | 11 | `{11, 11}` |
| 4 | 7 | `{11}` |
| 5 | 11 | `{11, 11}` |
| 6 | 11 | `{11, 11, 11}` |
| 7 | 3 | `{11, 11}` |
| 8 | 8 | `{11}` |

### (2)

Initially, $L$ is empty. The number of varieties is 0. Condition satisfied.

Assume at step $k$, $L$ contains only user ID $x$, consider the next input $A[k]$.
*   Case 1: $A[k] == x$ : Add $x$ to $L$, variety is still 1. Condition satisfied.
*   Case 2: $A[k] \neq x$ : Remove an $x$. $L$ becomes smaller or empty, variety is still 1 or 0. Condition satisfied.
*   Case 3: $L$ is empty : Add $A[k]$ to $L$, the variety is 1. Condition satisfied.

Therefore, the number of varieties of user IDs in $L$ is at most one.

### (3)

This is the Boyer-Moore Voting Algorithm.

Let the majority element be $M$. Its count is $N_M > N/2$. The count of all other elements is $N_{\text{other}} < N/2$.

The algorithm effectively pairs two distinct elements and eliminates both.

In the remove step, effectively one $y$ and one $x$ are discarded.

In the worst case for $M$, every non-$M$ element pairs with an $M$ element and eliminates it.

Since $N_M > N_{\text{other}}$, even if every non-$M$ element eliminates one $M$, there will be $N_M - N_{\text{other}} > 0$ copies of $M$ remaining.

Therefore, the list $L$ cannot be empty at the end, the element inside must be $M$.

### (4)

```text
find_majority():
    candidate_id = -1
    count = 0
    while True:
        id = read_log()
        if id == -1:
            break

        if count == 0:
            candidate_id = id
            count = 1
        else if id == candidate_id:
            count = count + 1
        else:
            count = count - 1

    return candidate_id
```
