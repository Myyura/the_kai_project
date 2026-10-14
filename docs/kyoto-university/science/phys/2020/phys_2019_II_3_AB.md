---
sidebar_label: "2020年度 II-3-AB（物理数学・実験物理学）"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Gamma-Function
  - Physics.Mechanics.Two-Body-Central-Force-and-Effective-Potential
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2020年度 問題II-3-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### II-3A

$\operatorname{Re}z>0$ に対し $\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}dt$ と定義する。

1. 自然数 $N$ に対して $\Gamma(N+1)=N!$ を示せ。
2. $\Gamma(1/2)$ を求めよ。ガウス積分を用いてよい。
3. 大きな $N$ に対して $\log N!=N(\log N-1)+\Delta$、$\Delta\ll N$ と書けることを示し、$\Delta$ の主要項を求めよ。必要なら、最大点 $t_0$ で $f''(t_0)<0$ となる滑らかな関数について、$m\gg1$ のとき $\int e^{mf(t)}dt\simeq e^{mf(t_0)}\sqrt{-2\pi/[mf''(t_0)]}$ を用いてよい。
4. $\alpha>0$ のとき $\int_0^\infty t^\alpha/(e^t-1)dt$ を $\Gamma$ と $\zeta(s)=\sum_{n=1}^\infty n^{-s}$ で表せ。

### II-3B

運動エネルギー $K=5\,\mathrm{MeV}$、電荷 $2e$ の $\alpha$ 粒子を金薄膜に入射する。金原子核の電荷は $79e$、質量数は197であり、$\alpha$ 粒子に比べ十分重いとする。古典的クーロン散乱として扱い、図1の衝突係数を $b$、散乱角を $\theta$、最接近距離を $D$ とする。$m_ec^2=0.50\,\mathrm{MeV}$、古典電子半径 $e^2/(4\pi\varepsilon_0m_ec^2)=2.8\times10^{-15}\,\mathrm m$ を用いてよい。

![原題 図1：金原子核によるアルファ粒子の散乱](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2020-II-3B-fig1.png)

1. 正面衝突での最接近距離 $D_{\min}$ を求めよ。
2. 単位面積・単位時間あたり $n$ 個の粒子を入射する。衝突係数が $b$ と $b+db$ の間にある粒子数率 $dn$ を求めよ。
3. $\cot(\theta/2)=2b/D_{\min}$ を使い、$\theta$ と $\theta+d\theta$ に散乱される粒子数率と微分散乱断面積 $d\sigma/d\Omega$ を求めよ。
4. 入射粒子束を $N_a$、薄膜の単位面積あたり原子数を $N_b$ とする。多重散乱を無視し、図2のように散乱角 $60^\circ$、距離 $r$ の場所に検出面積 $S$、効率100%の計数器を向けたところ、単位時間に $N_c$ 個を検出した。$r$ は薄膜の大きさより十分大きい。$d\sigma(60^\circ)/d\Omega$ を求めよ。

   ![原題 図2：金薄膜と粒子計数器](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2020-II-3B-fig2.png)

5. (4) の測定値から $D_{\min}$ を求めよ。

#### 题目描述

A：由伽马函数积分定义证明阶乘关系，求半整数值，以鞍点近似求 $\log N!$ 中的主要修正，并用伽马函数和黎曼 zeta 函数表示玻色型积分。

B：如上方图1，5 MeV 的 $\alpha$ 粒子对重金核发生库仑散射，电荷分别为 $2e,79e$。(1) 计算正碰最接近距离；(2) 求冲量参数环带的粒子数率；(3) 利用 $\cot(\theta/2)=2b/D_{\min}$ 推导 Rutherford 微分截面；(4) 按上方图2配置，入射通量 $N_a$、靶面数密度 $N_b$，距离 $r$、面积 $S$、方向 $60^\circ$ 的理想探测器计数率为 $N_c$，求微分截面；(5) 反求 $D_{\min}$。

## **Kai**

### II-3A

(1) 部分積分により $\Gamma(z+1)=z\Gamma(z)$。$\Gamma(1)=1$ と合わせて $\boxed{\Gamma(N+1)=N!}$。

(2) $t=x^2$ と置けば $\Gamma(1/2)=2\int_0^\infty e^{-x^2}dx=\boxed{\sqrt\pi}$。

(3) $\Gamma(N+1)=\int_0^\infty e^{-t+N\log t}dt$ の指数は $t=N$ で最大となる。二次まで展開して

$$
-t+N\log t=N\log N-N-\frac{(t-N)^2}{2N}+\cdots.
$$

従って $N!\simeq N^Ne^{-N}\sqrt{2\pi N}$ であり

$$
\boxed{\Delta=\frac12\log(2\pi N)+O(N^{-1}).}
$$

これは $N$ に比べ十分小さい。

(4) 正の項の級数 $1/(e^t-1)=\sum_{n=1}^\infty e^{-nt}$ を積分して

$$
\int_0^\infty\frac{t^\alpha}{e^t-1}dt
=\sum_{n=1}^\infty n^{-\alpha-1}\int_0^\infty x^\alpha e^{-x}dx
=\boxed{\Gamma(\alpha+1)\zeta(\alpha+1)}.
$$

$\alpha>0$ により原点近傍の積分も収束する。

### II-3B

(1) エネルギー保存から $K=(2\cdot79)e^2/(4\pi\varepsilon_0D_{\min})$。よって

$$
\boxed{D_{\min}=158\frac{m_ec^2}{K}r_e
=158\frac{0.50}{5}(2.8\times10^{-15})
\simeq4.4\times10^{-14}\,\mathrm m.}
$$

(2) 環帯の面積を掛けて $\boxed{dn=2\pi n b\,db}$。

(3) $b=(D_{\min}/2)\cot(\theta/2)$、$|db/d\theta|=(D_{\min}/4)\csc^2(\theta/2)$。従って

$$
\boxed{dn(\theta)=\frac{\pi nD_{\min}^2}{4}\cot\frac\theta2\csc^2\frac\theta2\,d\theta,}
$$

$$
\boxed{\frac{d\sigma}{d\Omega}=\frac{dn}{n\,2\pi\sin\theta\,d\theta}
=\frac{D_{\min}^2}{16\sin^4(\theta/2)}.}
$$

(4) 検出器の立体角は $S/r^2$。照射面積を $A_{\rm irr}$ とする。$N_a$ が単位面積・単位時間あたりの入射粒子数であるため、全入射粒子数率は $N_aA_{\rm irr}$ であり

$$
N_c=N_aA_{\rm irr}N_b\left.\frac{d\sigma}{d\Omega}\right|_{60^\circ}\frac S{r^2}.
$$

従って

$$
\boxed{\left.\frac{d\sigma}{d\Omega}\right|_{60^\circ}
=\frac{N_cr^2}{N_aA_{\rm irr}N_bS}.}
$$

$N_c$ を総計数率として用いる場合、照射面積の情報が必要である。一方、$N_a$ を総入射粒子数率として定義する、または $N_c$ を単位照射面積あたりの検出計数率として扱う規約なら、同じ式は $N_cr^2/(N_aN_bS)$ と書ける。

(5) $16\sin^4 30^\circ=1$ より

$$
\boxed{D_{\min}=r\sqrt{\frac{N_c}{N_aA_{\rm irr}N_bS}}.}
$$

(4) の面積を吸収した規約では $D_{\min}=r\sqrt{N_c/(N_aN_bS)}$ となる。

## **Reference**

- [京都大学公式原題（2020年度、PDF 13,15–16ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/R2.pdf)
