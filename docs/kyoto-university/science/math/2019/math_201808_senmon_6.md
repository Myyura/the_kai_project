---
sidebar_label: "2018年8月実施 専門科目 [6]"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Gamma-Function
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
---

# 京都大学 理学研究科 数学・数理解析専攻 2018年8月実施 専門科目 [6]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

区間 $(0,\infty)$ 上の関数列 $\{\varphi_n\}_{n=1}^{\infty}$ を

$$
\varphi_n(x)=\int_{1/n}^{n}\left(1+\frac{t}{n}\right)^{-n}t^{x-1}\,dt
\qquad(x>0)
$$

により定める。

(1) 任意の $x\in(0,\infty)$ に対して、数列 $\{\varphi_n(x)\}_{n=1}^{\infty}$ は収束することを示せ。

(2) 関数 $\varphi$ を $\varphi(x)=\lim_{n\to\infty}\varphi_n(x)$（$x>0$）で定める。$\varphi$ は区間 $(0,\infty)$ 上で微分可能であることを示せ。

#### 题目描述

定义函数列

$$
\varphi_n(x)=\int_{1/n}^{n}\left(1+\frac{t}{n}\right)^{-n}t^{x-1}\,dt,
\qquad x>0.
$$

(1) 证明对每个 $x>0$，数列 $\{\varphi_n(x)\}$ 收敛。

(2) 令 $\varphi(x)=\lim_{n\to\infty}\varphi_n(x)$，证明 $\varphi$ 在 $(0,\infty)$ 上可微。

## **Kai**

### (1)

$x>0$ を固定し、$(0,\infty)$ 上で

$$
g_n(t)=\mathbf1_{[1/n,n]}(t)
\left(1+\frac tn\right)^{-n}t^{x-1}
$$

と置く。各 $t>0$ に対し $g_n(t)\to e^{-t}t^{x-1}$ である。

$0\le u\le1$ のとき $\log(1+u)\ge u/2$ なので、$1/n\le t\le n$ では

$$
\left(1+\frac tn\right)^{-n}
=e^{-n\log(1+t/n)}\le e^{-t/2}.
$$

したがって全域で $0\le g_n(t)\le e^{-t/2}t^{x-1}$ となる。右辺は、原点付近では $x>0$ により、無限遠では指数減衰により可積分である。優収束定理から

$$
\boxed{\varphi_n(x)\longrightarrow
\varphi(x)=\int_0^\infty e^{-t}t^{x-1}\,dt=\Gamma(x)}.
$$

### (2)

任意に $x_0>0$ を取り、$a=x_0/2,\ b=3x_0/2$ と置く。$x\in[a,b]$ に対し

$$
\left|\frac{\partial}{\partial x}\bigl(e^{-t}t^{x-1}\bigr)\right|
=e^{-t}t^{x-1}|\log t|
\le
\begin{cases}
t^{a-1}|\log t|,&0<t\le1,\\
e^{-t}t^{b-1}\log t,&t\ge1.
\end{cases}
$$

この上界は $(0,\infty)$ 上で可積分である。平均値の定理により $x_0$ における差分商も同じ上界で抑えられるので、優収束定理を差分商に適用できる。したがって

$$
\boxed{\varphi'(x_0)=\int_0^\infty e^{-t}t^{x_0-1}\log t\,dt}.
$$

$x_0>0$ は任意なので、$\varphi$ は $(0,\infty)$ 上で微分可能である。

## **Reference**

- [京都大学公式問題（2019年度・専門科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2018math_senmon.pdf)
- [照合用参考解答（2019年度・専門科目 問題6、PDF 1–3ページ）](https://drive.google.com/file/d/1MAZDX0zU8Pe3RWo9Nh835ZeyUE-uAMJN/view)
