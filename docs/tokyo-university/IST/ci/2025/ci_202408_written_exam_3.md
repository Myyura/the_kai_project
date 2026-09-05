---
sidebar_label: 2024年8月実施 筆記試験 第3問
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Radix-Sort
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2024年8月実施 筆記試験 第3問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines. If necessary, use examples, figures or equations.

1. **Radix sort**
2. **L-value and R-value in programming languages**
3. **Model checking**
4. **Quasi-Newton method**
5. **Bayesian networks**
6. **Marching cubes method**
7. **Types of optical distance sensors (at least two) and their principles**
8. **Cryptographic hash function**

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例、图或公式。

1. 基数排序。
2. 程序语言中的左值与右值。
3. 模型检测。
4. 拟牛顿法。
5. 贝叶斯网络。
6. Marching Cubes 方法。
7. 至少两类光学测距传感器及其原理。
8. 密码学哈希函数。

## **Kai**
**Radix Sort**
The least-significant-digit (LSD) variant of radix sort sorts fixed-length strings or nonnegative integers from lower to higher digit places. In the $i$-th step in the loop, the algorithm calls a stable counting sort distributing $i$-th digit into ordered buckets. The time complexity is $O(d(n+k))$ and auxiliary space is $O(n+k)$, where $n$ is the array length, $d$ is the number of digits of the maximum number, and $k$ is the base or the length of symbols.

**L-value and R-value**
An l-value identifies an object or, in C++, a function; an array element and a dereferenced object pointer are examples. Only a modifiable l-value can be the left operand of built-in assignment: `const int c = 1;` makes `c` an l-value that cannot be assigned to. An r-value denotes a value used in an expression and is often temporary. In `x = y + 1`, `x` is an l-value and `y + 1` is an r-value. Language rules determine conversions, references, and whether an expression is assignable.

**Model checking**
A finite-state system and a temporal-logic property are given as input. The checker explores reachable states, explicitly or symbolically, and decides whether every execution satisfies the property. If not, it returns a counterexample trace. State explosion is mitigated by BDD/SAT methods, abstraction, and partial-order reduction. Bounded model checking searches executions up to a chosen length; absence of a counterexample at that bound alone does not establish an unbounded property.

**Quasi-Newton method**
A quasi-Newton method minimizes a smooth function using its gradient and an iteratively updated approximation $B_k$ to its Hessian. A search direction solves $B_kp_k=-\nabla f(x_k)$, followed by a line search. With $s_k=x_{k+1}-x_k$ and $y_k=\nabla f(x_{k+1})-\nabla f(x_k)$, the update satisfies the secant equation $B_{k+1}s_k=y_k$. BFGS uses

$$
B_{k+1}=B_k-\frac{B_ks_ks_k^\mathsf TB_k}{s_k^\mathsf TB_ks_k}
+\frac{y_ky_k^\mathsf T}{y_k^\mathsf Ts_k}.
$$

For $B_k$ positive definite and $y_k^\mathsf Ts_k>0$, this preserves positive definiteness. It avoids evaluating the exact Hessian; L-BFGS further limits storage by retaining only a few recent $(s_k,y_k)$ pairs.

**Bayesian networks**
A Bayesian network represents a joint probability distribution using a directed acyclic graph. Each node is a random variable and each edge specifies a parent relationship; every node has a conditional distribution given its parents. The joint distribution factorizes as $p(x_1,\ldots,x_n)=\prod_i p(x_i\mid x_{\mathrm{pa}(i)})$. For example, $A\to B\to C$ gives $p(a,b,c)=p(a)p(b\mid a)p(c\mid b)$ and implies $A\perp C\mid B$. Inference conditions on observed variables to compute posterior probabilities. Edges encode probabilistic dependence structure and do not imply causation without additional assumptions.

**Marching cubes method**
Marching cubes extracts an isosurface $f(x,y,z)=\tau$ from scalar samples on a three-dimensional grid. It visits each grid cube, classifies its eight vertices as above or below $\tau$, and uses the resulting eight-bit case index to select a triangle pattern. Triangle vertices lie on cube edges crossing the threshold, with their positions estimated by linear interpolation. The triangles form a mesh, while interpolated field gradients can provide surface normals. Ambiguous face/interior configurations require consistent resolution to obtain the intended topology. A typical application is reconstructing anatomical surfaces from CT volume data.

**Types of optical distance sensors and their principles**
A time-of-flight sensor emits light and measures the round-trip delay $\Delta t$ of its reflection; for colocated emission and reception the distance is $d=c\Delta t/2$. A triangulation sensor uses a known separation between projector and receiver; changing target distance changes the position of the reflected light spot on the receiver, from which calibrated geometry determines distance. Stereo cameras likewise triangulate corresponding image points: for rectified parallel cameras, depth is $z=fb/\delta$, with focal length $f$, baseline $b$, and disparity $\delta$ in consistent units. Timing precision limits time-of-flight resolution; spot localization, calibration and the baseline affect triangulation accuracy.

**Cryptographic hash function**
A deterministic function maps an arbitrary-length message to a fixed-length digest. It should resist preimage, second-preimage, and collision attacks, and small input changes should unpredictably alter the digest. Hashes support integrity checks, digital signatures, commitments, and password constructions with salts and slow KDFs. SHA-256 is a standard example; obsolete MD5 and SHA-1 are not collision resistant.
