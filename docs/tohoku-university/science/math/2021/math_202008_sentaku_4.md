---
sidebar_label: "2020年8月実施 選択問題 [4]"
tags:
  - Tohoku-University
  - Mathematics.Geometry.Differentiable-Manifolds-and-Regular-Values
---

# 東北大学 理学研究科 数学専攻 2020年8月実施 選択問題 \[4\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#88430bb8-b7a9-4069-b57f-8457b89b7bf3) refined with GPT 6 Astra)

## **Description**


$\mathbb{RP}^3$ を $3$ 次元実射影空間として、$\pi:\mathbb R^4\setminus\{(0,0,0,0)\}\to\mathbb{RP}^3$ を自然な射影とする。$(x_1,x_2,x_3,x_4)\in\mathbb R^4\setminus\{(0,0,0,0)\}$ に対して $\mathbb{RP}^3$ の点 $\pi(x_1,x_2,x_3,x_4)$ を $[x_1:x_2:x_3:x_4]$ と書く。以下の問いに答えよ。

(1) 次の式で定義される $f:\mathbb{RP}^3\to\mathbb R$ は $\mathbb{RP}^3$ 上の $C^\infty$ 級関数になるかどうか、理由とともに答えよ。

$$
f([x_1:x_2:x_3:x_4])=
\frac{x_1^2+x_2^2+x_3^2-x_4^2}{x_1^2+x_2^2+x_3^2+x_4^2}
$$

ただし、$\mathbb{RP}^3$ には $\pi$ が $C^\infty$ 級写像となるように $C^\infty$ 級多様体の構造を定めるものとする。

(2) $f^{-1}(0)$ は $\mathbb{RP}^3$ 内の部分多様体であるかどうか、理由とともに答えよ。

### 题目描述


令 $\mathbb{RP}^3$ 为三维实射影空间，$\pi:\mathbb R^4\setminus\{(0,0,0,0)\}\to\mathbb{RP}^3$ 为自然投影。对 $(x_1,x_2,x_3,x_4)\in\mathbb R^4\setminus\{(0,0,0,0)\}$，将对应的点 $\pi(x_1,x_2,x_3,x_4)$ 记为 $[x_1:x_2:x_3:x_4]$。回答下列问题。

(1) 判断下式定义的 $f:\mathbb{RP}^3\to\mathbb R$ 是否为 $\mathbb{RP}^3$ 上的 $C^\infty$ 函数，并说明理由：

$$
f([x_1:x_2:x_3:x_4])=
\frac{x_1^2+x_2^2+x_3^2-x_4^2}{x_1^2+x_2^2+x_3^2+x_4^2}.
$$

这里赋予 $\mathbb{RP}^3$ 使 $\pi$ 成为 $C^\infty$ 映射的 $C^\infty$ 流形结构。

(2) 判断 $f^{-1}(0)$ 是否为 $\mathbb{RP}^3$ 内的子流形，并说明理由。

## **Kai**

### (1)

$\lambda\ne0$ に対して各座標を $\lambda$ 倍すると、分子と分母がともに $\lambda^2$ 倍されるので比は変わらない。また分母は定義域上で正である。したがって $f$ は代表元によらず定まる。

$U_i=\{[x_1:x_2:x_3:x_4]\mid x_i\ne0\}$ 上では $x_i=1$ と正規化し、残りの比 $x_j/x_i$（$j\ne i$）を局所座標に取る。この座標で $f$ は多項式の比であり、分母は $1+\sum_{j\ne i}(x_j/x_i)^2>0$ である。従ってどの局所座標でも $C^\infty$ 級であり、

$$
\boxed{f\text{ は }\mathbb{RP}^3\text{ 上の }C^\infty\text{ 級関数である。}}
$$

### (2)

$f([x])=0$ のとき $x_1^2+x_2^2+x_3^2=x_4^2$ である。$x_4=0$ なら全座標が $0$ になるので、零点集合はすべて $U_4$ に含まれる。

$U_4$ の座標 $u=(x_1/x_4,x_2/x_4,x_3/x_4)\in\mathbb R^3$ を使うと

$$
f(u)=\frac{\|u\|^2-1}{\|u\|^2+1},\qquad
\nabla f(u)=\frac{4u}{(\|u\|^2+1)^2}.
$$

零点集合では $\|u\|=1$ なので $\nabla f(u)=u\ne0$。したがって $0$ は正則値であり、

$$
\boxed{f^{-1}(0)\text{ は }\mathbb{RP}^3\text{ の }2\text{ 次元 }C^\infty\text{ 級部分多様体である。}}
$$

実際、上の座標によって $f^{-1}(0)$ は単位球面 $S^2$ と微分同相である。

## **Reference**

- [東北大学の原試験問題（公開保存版：`2021(R3)sentaku.pdf`、PDF 3 ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2021年度の対応する解答](https://note.com/normalmath/n/n89152917de11#88430bb8-b7a9-4069-b57f-8457b89b7bf3)
