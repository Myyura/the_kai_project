---
sidebar_label: "2019年8月実施 数理科学 II [2]"
tags:
  - Osaka-University
  - Mathematics.Linear-Algebra
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 II \[2\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$m\ge n$ は自然数、$b\in\mathbb R^m$ とする。$A$ は $\operatorname{rank}A=n$ を満たす $m\times n$ 実行列で、$W=\{Ax\mid x\in\mathbb R^n\}$ とおく。内積は標準内積とする。

(1) $y\in\mathbb R^n$ とする。$b-Ay\perp W$ と $A^Tb=A^TAy$ が同値であることを示せ。

(2) $x\in\mathbb R^n$ とする。$x^TA^TAx=0$ ならば $x=0$ を示せ。

(3) $A^TA$ が正則であることを示せ。

(4) $b$ の $W$ への直交射影は $A(A^TA)^{-1}A^Tb$ であることを示せ。

## **Kai**

### (1)

$$
b-Ay\perp W\iff x^TA^T(b-Ay)=0\ (\forall x\in\mathbb R^n)
\iff A^Tb=A^TAy.
$$

### (2)
$x^TA^TAx=\|Ax\|^2$ なので $Ax=0$。列が一次独立であるから $x=0$。

### (3)
$A^TAx=0$ なら (2) より $x=0$。したがって核は $\{0\}$ であり正則である。

### (4)
$y=(A^TA)^{-1}A^Tb$ とおくと $u=Ay\in W$ で、(1) より $v=b-u\perp W$。よって

$$
\boxed{\operatorname{proj}_Wb=A(A^TA)^{-1}A^Tb}.
$$
