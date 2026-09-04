---
sidebar_label: "社会工学学位プログラム 2023年1月実施 数学 II"
tags:
  - Tsukuba-University
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Integration
---
# 筑波大学 理工情報生命学術院 システム情報工学研究群 社会工学学位プログラム・サービス工学学位プログラム 共通 2023年1月実施 数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(1) 関数 $f(x) = \sin x$ とする. $f^{(n)}(x) (n = 1,2,...)$ は $f(x)$ の $n$ 階微分である.以下の問いに答えよ.
(a) 次の値をそれぞれ求めよ.
 i) $f^{(2n-1)}(0)$ , ii) $f^{(2n)}(0), n = 1, 2, ...$
(b) 次の極限を求めよ.
 i) $\lim_{x \to 0} \frac{x - f(x)}{x^3}$ , ii) $\lim_{x \to 0} \frac{f(x) - x + x^3/6}{x^5}$ , iii) $\lim_{x \to 0} \frac{f(x) - x + x^3/6 - x^5/120}{x^7}$
(2) 実数関数の列 $f_n(x) (n = 1,2,...)$ は以下のように定義される.

$$
f_1(x) = \begin{cases} \lambda e^{-\lambda x} & x \geq 0 \\ 0 & \text{その他} \end{cases}
$$

$n = 2, 3, ...$ について

$$
f_n(x) = \begin{cases} \int_0^{\infty} f_{n-1}(x - y) f_1(y) dy & x \geq 0 \\ 0 & \text{その他} \end{cases}
$$

ただし, $\lambda > 0$ とする.
以下の問いに答えよ.
(a) $x \geq 0$ の場合, $f_2(x)$ を求めよ.
(b) $\int_0^{\infty} x f_2(x) dx$ を求めよ.
(c) $x \geq 0$ の場合, $f_3(x)$ を求めよ.
(d) $x \geq 0$ の場合, $f_n(x) (n = 1,2,...)$ を求めよ.
(e) $\int_0^{\infty} f_n(x) dx (n = 1,2,...)$ を求めよ.

### 题目描述

完成以下两题。

1. 令 $f(x)=\sin x$，并以 $f^{(n)}(x)$ 表示 $f$ 的 $n$ 阶导数，其中 $n=1,2,\ldots$。

   1. 对每个 $n=1,2,\ldots$，分别求

      $$
      \text{(i)}\ f^{(2n-1)}(0),\qquad
      \text{(ii)}\ f^{(2n)}(0).
      $$

   2. 分别求极限

      $$
      \text{(i)}\quad
      \lim_{x\to0}\frac{x-f(x)}{x^3},
      $$

      $$
      \text{(ii)}\quad
      \lim_{x\to0}
      \frac{f(x)-x+x^3/6}{x^5},
      $$

      $$
      \text{(iii)}\quad
      \lim_{x\to0}
      \frac{f(x)-x+x^3/6-x^5/120}{x^7}.
      $$

2. 设 $\lambda>0$。定义实函数列 $f_n(x)\ (n=1,2,\ldots)$：

   $$
   f_1(x)=
   \begin{cases}
   \lambda e^{-\lambda x},&x\geq0,\\
   0,&\text{其他情形},
   \end{cases}
   $$

   对 $n=2,3,\ldots$，

   $$
   f_n(x)=
   \begin{cases}
   \displaystyle\int_0^\infty
   f_{n-1}(x-y)f_1(y)\,dy,&x\geq0,\\
   0,&\text{其他情形}.
   \end{cases}
   $$

   回答：

   1. 当 $x\geq0$ 时求 $f_2(x)$；
   2. 求 $\displaystyle\int_0^\infty x f_2(x)\,dx$；
   3. 当 $x\geq0$ 时求 $f_3(x)$；
   4. 当 $x\geq0$ 时求一般的 $f_n(x)\ (n=1,2,\ldots)$；
   5. 对 $n=1,2,\ldots$，求 $\displaystyle\int_0^\infty f_n(x)\,dx$。

## **Kai**

(1) (a) i)
$f(x)=\sin x$ とすると，

$$
f'(x)=\cos x,\quad
f''(x)=-\sin x,\quad
f'''(x)=-\cos x,\quad
f^{(4)}(x)=\sin x
$$

であり，微分は周期 $4$ をもつ．
したがって，

$$
f^{(2n-1)}(0)
= (-1)^{n-1}\cos 0
= (-1)^{n-1}
$$

が成り立つ．

ii)
同様に，

$$
f^{(2n)}(0)
= (-1)^n \sin 0
= 0
$$

である．

(b) i)
極限

$$
\lim_{x\to 0}\frac{x-\sin x}{x^3}
$$

を求める．
$\sin x$ のテイラー展開

$$
\sin x
= x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots
$$

を用いると，

$$
\frac{x-\sin x}{x^3}
= \frac{\frac{x^3}{3!}-\frac{x^5}{5!}+\cdots}{x^3}
$$

となる．よって，

$$
\lim_{x\to 0}\frac{x-\sin x}{x^3}
= \frac{1}{6}
$$

である．

ii)
次に，

$$
\lim_{x\to 0}
\frac{\sin x - x + \frac{x^3}{6}}{x^5}
$$

を考える．
テイラー展開を代入すると，

$$
\frac{\sin x - x + \frac{x^3}{6}}{x^5}
= \frac{\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots}{x^5}
$$

となるので，

$$
\lim_{x\to 0}
\frac{\sin x - x + \frac{x^3}{6}}{x^5}
= \frac{1}{120}
$$

である．

iii)
さらに，

$$
\lim_{x\to 0}
\frac{\sin x - x + \frac{x^3}{6} - \frac{x^5}{120}}{x^7}
$$

について，

$$
\frac{\sin x - x + \frac{x^3}{6} - \frac{x^5}{120}}{x^7}
= \frac{-\frac{x^7}{7!}+\cdots}{x^7}
$$

が成り立つ．したがって，

$$
\lim_{x\to 0}
\frac{\sin x - x + \frac{x^3}{6} - \frac{x^5}{120}}{x^7}
= -\frac{1}{7!}
= -\frac{1}{5040}
$$

である．

(2) (a)
畳み込みの定義より，

$$
f_2(x)
= \int_0^{\infty} f_1(x-y)f_1(y)\,dy
$$

である． $x\ge 0$ のとき，

$$
f_2(x)
= \int_0^x
\lambda e^{-\lambda(x-y)}
\lambda e^{-\lambda y}\,dy
$$

となり，

$$
f_2(x)
= \lambda^2 e^{-\lambda x}
\int_0^x dy
= \lambda^2 x e^{-\lambda x}
$$

を得る．

(b)

$$
\int_0^{\infty} x f_2(x)\,dx
= \lambda^2
\int_0^{\infty} x^2 e^{-\lambda x}\,dx
$$

である．部分積分を2回用いると，

$$
\int_0^{\infty} x^2 e^{-\lambda x}\,dx
= \frac{2}{\lambda^3}
$$

が得られる．したがって，

$$
\int_0^{\infty} x f_2(x)\,dx
= \lambda^2\cdot\frac{2}{\lambda^3}
= \frac{2}{\lambda}
$$

である．

(c)
同様に，

$$
f_3(x)
= \int_0^{\infty} f_2(x-y)f_1(y)\,dy
$$

であり， $x\ge 0$ のとき，

$$
f_3(x)
= \lambda^3 e^{-\lambda x}
\int_0^x (x-y)\,dy
$$

となる．ここで，

$$
\int_0^x (x-y)\,dy
= \frac{x^2}{2}
$$

より，

$$
f_3(x)
= \frac{\lambda^3 x^2 e^{-\lambda x}}{2}
$$

を得る．

(d)
以上より，一般に

$$
f_n(x)
= \frac{\lambda^n x^{n-1} e^{-\lambda x}}{(n-1)!}
$$

が成り立つ．

(e)
正規化を確認するため，

$$
\int_0^{\infty} f_n(x)\,dx
= \frac{\lambda^n}{(n-1)!}
\int_0^{\infty} x^{n-1} e^{-\lambda x}\,dx
$$

を計算する．変数変換 $u=\lambda x$ を用いると，

$$
\int_0^{\infty} f_n(x)\,dx
= \frac{1}{(n-1)!}
\int_0^{\infty} u^{n-1} e^{-u}\,du
= \frac{\Gamma(n)}{(n-1)!}
= 1
$$

となる．
