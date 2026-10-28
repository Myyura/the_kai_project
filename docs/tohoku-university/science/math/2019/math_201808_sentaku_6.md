---
sidebar_label: "2018年8月実施 選択問題 [6]（関数解析）"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Orthogonal-Complement
  - Mathematics.Functional-Analysis.Weak-and-Strong-Convergence
---

# 東北大学 理学研究科 数学専攻 2018年8月実施 選択問題 \[6\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$H$ を実ヒルベルト空間とし、$\langle\cdot,\cdot\rangle$ をその内積、$\|\cdot\|=\sqrt{\langle\cdot,\cdot\rangle}$ をノルムとする。空でない集合 $A\subset H$ に対して

$$
A^\perp=\{x\in H\mid\text{任意の }a\in A\text{ に対して }\langle x,a\rangle=0\}
$$

とする。以下の問いに答えよ。

(1) $A\subset(A^\perp)^\perp$ を示せ。

(2) $A^\perp$ は $H$ の閉部分空間であることを示せ。

(3) $A$ が閉部分空間であることと $A=(A^\perp)^\perp$ が成り立つことが、同値であることを示せ。

(4) $A\subset H$ に対して、$A'\subset H$ を

$$
A'=\left\{x\in H\ \middle|\ \mathop{\mathrm{w}\text{-}\lim}_{n\to\infty}a_n=x\text{ となる }A\text{ の点列 }\{a_n\}_{n=1}^\infty\text{ が存在する}\right\}
$$

で定義する。このとき $A^\perp=(A')^\perp$ が成り立つことを示せ。ただし、$\mathop{\mathrm{w}\text{-}\lim}_{n\to\infty}a_n=x$ とは $a_n$ が $n\to\infty$ のときに $x$ に弱収束することとする。

### 题目描述

设 $H$ 为实希尔伯特空间，内积为 $\langle\cdot,\cdot\rangle$，范数为 $\|x\|=\sqrt{\langle x,x\rangle}$。对非空集合 $A\subset H$，定义

$$
A^\perp=\{x\in H\mid\text{对所有 }a\in A,\ \langle x,a\rangle=0\}.
$$

回答下列问题。

(1) 证明 $A\subset(A^\perp)^\perp$。

(2) 证明 $A^\perp$ 是 $H$ 的闭线性子空间。

(3) 证明 $A$ 为闭线性子空间，当且仅当 $A=(A^\perp)^\perp$。

(4) 对 $A\subset H$，定义

$$
A'=\{x\in H\mid\text{存在点列 }\{a_n\}_{n=1}^\infty\subset A,\ a_n\rightharpoonup x\}.
$$

证明 $A^\perp=(A')^\perp$。这里 $\mathop{\mathrm{w}\text{-}\lim}_{n\to\infty}a_n=x$（亦记 $a_n\rightharpoonup x$）表示 $a_n$ 在 $n\to\infty$ 时弱收敛于 $x$。

## **Kai**

### (1)

$u\in A$, $v\in A^\perp$ ならば $\langle u,v\rangle=0$ である。従って $u\in(A^\perp)^\perp$ となり、$A\subset(A^\perp)^\perp$ を得る。

### (2)

任意の $a\in A$ に対して $x\mapsto\langle x,a\rangle$ は連続線形汎関数である。従って

$$
A^\perp=\bigcap_{a\in A}\{x\in H:\langle x,a\rangle=0\}
$$

は閉部分空間の共通部分であり、閉部分空間である。

### (3)

$A$ が閉部分空間なら、直交分解定理により任意の $x\in(A^\perp)^\perp$ を $x=p+q$（$p\in A$, $q\in A^\perp$）と書ける。このとき

$$
0=\langle x,q\rangle=\langle p,q\rangle+\|q\|^2=\|q\|^2
$$

なので $q=0$、従って $x\in A$ となる。(1) と合わせて $A=(A^\perp)^\perp$ を得る。

逆にこの等式が成立すれば、(2) を $A^\perp$ に適用することで右辺が閉部分空間と分かるため、$A$ も閉部分空間である。

### (4)

定数列を考えれば $A\subset A'$ なので $(A')^\perp\subset A^\perp$ である。逆に $x\in A^\perp$, $a\in A'$ とする。$a_n\in A$ で $a_n\rightharpoonup a$ となる列をとると

$$
\langle x,a\rangle=\lim_n\langle x,a_n\rangle=0.
$$

よって $x\in(A')^\perp$ であり、$A^\perp=(A')^\perp$ となる。

## **Reference**

- [東北大学 2019年度・選択問題の公開保存資料（sentaku2019(H31).pdf、PDF 6ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2019年度・関数解析の答案](https://note.com/normalmath/n/n89152917de11#38b525b5-3ca5-4fa7-8412-4535d94662a9)
