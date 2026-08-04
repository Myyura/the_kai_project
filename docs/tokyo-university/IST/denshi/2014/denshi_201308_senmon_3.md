---
sidebar_label: "2013年8月実施 専門 第3問"
tags:
  - Tokyo-University
  - Discrete-Mathematics.Combinatorics.Fibonacci-Recurrence
  - Computer-Science.Programming.Recursion
  - Computer-Science.Programming.Fibonacci-Numbers
  - Computer-Science.Programming.Integer-Overflow
  - Computer-Science.Computer-Architecture.Floating-Point-Rounding-Error
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2013年8月実施 専門 第3問 

## **Author**
[Josuke](https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f?xhsshare=QQ&appuid=5de61ebb0000000001004b64&apptime=1718276766), 祭音Myyura

## **Description**
The sequence that is defined by $f(0)=0$, $f(1)=1$, and the recurrence relation $f(n) = f(n-1) + f(n-2) \ (n > 1)$ is called the Fibonacci sequence. Answer the following questions on this sequence.

(1) Give a pseudo-code program to calculate $f(n)$ using recursive calls according to the recurrence relation.

(2) Give another pscudo-code program to calculate $f(n)$ from the recurrence relation without using recursive calls.

(3) Assume that 64-bit integers are used. Explain the drawbacks of each of the methods described in Questions (1) and (2).

(4) The closed-form solution of the Fibonacci sequence is 

$$
f(n) = \frac{1}{\sqrt{5}}\Bigg(\bigg(\frac{1+\sqrt{5}}{2}\bigg)^n - \bigg(\frac{1-\sqrt{5}}{2}\bigg)^n\Bigg).
$$

Explain the merits and drawbacks of the calculation using this form with floating point numbers, as compared to the method described in Question (2).

### 题目描述

数列由 $f(0)=0$、$f(1)=1$ 以及递推关系

$$
f(n)=f(n-1)+f(n-2)\qquad(n>1)
$$

定义，称为斐波那契数列。回答下列问题。

(1) 按照上述递推关系，写出使用递归调用计算 $f(n)$ 的伪代码。

(2) 再写一段依据同一递推关系、但不使用递归调用来计算 $f(n)$ 的伪代码。

(3) 假设使用 $64$ 位整数，分别说明 (1)、(2) 两种方法的缺点。

(4) 斐波那契数列的闭式为

$$
f(n)=\frac{1}{\sqrt{5}}\left[\left(\frac{1+\sqrt{5}}{2}\right)^n-\left(\frac{1-\sqrt{5}}{2}\right)^n\right].
$$

与 (2) 的方法相比，说明使用浮点数按该闭式计算的优点与缺点。

## **Kai**
### (1)
```text
def Fib(n) :
    if n <= 1:
        return n
    return Fib(n-1) + Fib(n-2)
```
#### <center> Code 1: Calculate $f(n)$ using recursive calls

### (2)
```text
def Fib(n) :
    result = [0] * (n+1)
    result[1] = 1
    for i = 2 to n+1 :
        result[i] = result[i-1] + result[i-2]
    return result[n]
```
#### <center> Code 2: calculate $f(n)$ from the recurrence relation without using recursive calls

### (3)
The time complexity of `Code 1` is $O(2^n)$ (Hint: Solve recurrence relation $T(n) = T(n-1) + T(n-2) + O(1)$).

The space complexity of `Code 1` is $O(n)$ (Hint: function calls are executed sequentially. Sequential execution guarantees that the stack size will never exceed the depth of the calls' tree, which is $O(n)$).

The time complexity and space complexity of `Code 2` are both $O(n)$, which implies that `Code 2` runs much faster than `Code 1`.
But still, `Code 2` needs $O(n)$ space.


### (4)
By using [Exponentiation by squaring](https://en.wikipedia.org/wiki/Exponentiation_by_squaring), $f(n)$ can be calculated in $O(\log n)$, which is faster than `Code 2`.
But due to the inaccuracy of float point numbers, it is hard to calculate the accurate answer of $f(n)$ in terms of the closed-form formula of Fibonacci sequence.
