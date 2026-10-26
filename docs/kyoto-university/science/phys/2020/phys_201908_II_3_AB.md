---
sidebar_label: "2019年8月実施 II-3-AB（物理数学・実験物理学）"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Gamma-Function
  - Physics.Mechanics.Two-Body-Central-Force-and-Effective-Potential
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2019年8月実施 問題II-3-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### II-3A（物理数学）

実部が正である複素数 $z$ に対し、ガンマ関数は次式のように定義される。

$$
\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}\,dt.
$$

(1) 自然数 $N$ に対し、$\Gamma(N+1)=N!$ となることを示せ。

(2) $\Gamma(1/2)$ を計算せよ。ただし、必要なら正の実数 $a$ に対して、$\int_{-\infty}^{\infty}e^{-ax^2}\,dx=\sqrt{\pi/a}$ が成り立つことを用いてよい。

(3) 大きな自然数 $N$ に対し、$N$ に比べ十分小さな $\Delta$ を用いて、

$$
\log N!=N(\log N-1)+\Delta
$$

と表すことができることを示せ。またそのときに、$\Delta$ の最も主要な項を求めよ。

［ヒント］実数 $t$ に対しなめらかに変化する実数関数 $f(t)$ が、$t=t_0$ でただ 1 つの最大値 $f(t_0)$ を持ち、そこでの二階微分 $f''(t_0)\ (=d^2f/dt^2|_{t=t_0})$ が負であるとき、十分大きな正の実数 $m$ に対し、

$$
\int_{-\infty}^{\infty}dt\,e^{mf(t)}\simeq e^{mf(t_0)}\sqrt{\frac{-2\pi}{mf''(t_0)}}
$$

と近似することができる。

(4) 正の実数 $\alpha$ に対し、

$$
\int_0^\infty\frac{t^\alpha}{e^t-1}\,dt
$$

をガンマ関数とリーマンゼータ関数を用いて表せ。ただし、リーマンゼータ関数は

$$
\zeta(s)=\sum_{n=1}^{\infty}\frac{1}{n^s}
$$

と与えられる。

### II-3B（実験物理学）

原子核の大きさは、$\alpha$ 線（原子番号 $Z=2$、質量数 $A=4$）を金薄膜に照射し、弾性散乱された $\alpha$ 線の散乱角と個数を計測することで求まる。$\alpha$ 線の運動エネルギーは $5\,\mathrm{MeV}$ とする。これを古典的なクーロン散乱で考える。図 1 のように $\alpha$ 線の入射軌道の延長と原子核の最短距離（一般に衝突係数という）を $b$ とし、$\alpha$ 線の実験室系での散乱角を $\theta$、$\alpha$ 線の軌道と原子核の最短距離を $D$ とする。金原子核（$Z=79,A=197$）は $\alpha$ 線にくらべ十分重い。簡単のため、核子（陽子、中性子）の質量は共に $1.0\,\mathrm{GeV}/c^2$、電子質量 $m_e=0.50\,\mathrm{MeV}/c^2$、電荷素量を $e$、光速 $c=3.0\times10^8\,\mathrm{m/s}$、真空の誘電率を $\varepsilon_0$ とする。

![図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2020/201908-II-3B-fig1.png)

(1) $b$ により $D$ は変化するが、$\alpha$ 線が原子核に最も接近する距離 $D_{\min}$ は $\alpha$ 線の最初の運動エネルギーと金原子核の静電位置エネルギーが等しくなる条件によって決まる。$D_{\min}$ の値を計算せよ。ただし古典電子半径 $e^2/(4\pi\varepsilon_0m_ec^2)=2.8\times10^{-15}\,\mathrm m$ である。

(2) 次に単位時間、単位面積あたり $n$ 個の $\alpha$ 線が金薄膜に入射したとき、$b\sim b+db$ に入る単位時間あたりの個数 $dn$ を求めよ。

(3) 金薄膜に入射した $\alpha$ 線は問 (1) のような古典的なクーロン場による散乱モデルで記述され、$\theta,D_{\min}$ と $b$ の間には以下の関係が成り立つ。

$$
\cot\frac\theta2=\frac{2b}{D_{\min}}.
$$

これを用いて $\theta\sim\theta+d\theta$ に入る粒子数 $dn(\theta)$ を計算し、さらに実際に測定可能な微分断面積 $d\sigma(\theta)/d\Omega$ を $\theta,D_{\min}$ を用いて表せ。$d\Omega$ は立体角である。このように $d\sigma(\theta)/d\Omega$ の分布から $D_{\min}$ が得られ、原子核のサイズの上限値が得られる。

(4) 次に $\theta=60$ 度方向へ散乱される $\alpha$ 線の計測実験を考える。単位面積、単位時間あたり $N_a$ 個の $\alpha$ 線が金薄膜に入射する。金薄膜は単位面積で金原子数が $N_b$ 個ある。この金薄膜内での $\alpha$ 線の散乱確率は小さく 2 回散乱されることはない。図 2 のように金薄膜の上 60 度方向、距離 $r$ の位置に粒子カウンタ（検出面積 $S$）を置き、その単位時間あたりの計測数は $N_c$ であった。粒子カウンタの検出効率は $100\%$ である。距離 $r$ は金薄膜の大きさより十分に大きい。この時の $d\sigma(\theta=60^\circ)/d\Omega$ を求めよ。

(5) 小問 (4) の実験値から $D_{\min}$ を求めよ。

![図2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2020/201908-II-3B-fig2.png)

### 题目描述

**II-3A（数学物理）**

对实部为正的复数 $z$，伽马函数定义为

$$
\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}\,dt.
$$

(1) 证明对自然数 $N$，有 $\Gamma(N+1)=N!$。

(2) 计算 $\Gamma(1/2)$。必要时可使用对正实数 $a$ 成立的高斯积分 $\int_{-\infty}^{\infty}e^{-ax^2}\,dx=\sqrt{\pi/a}$。

(3) 证明对很大的自然数 $N$，可用相对 $N$ 足够小的 $\Delta$ 写成

$$
\log N!=N(\log N-1)+\Delta,
$$

并求 $\Delta$ 的最主要项。

［提示］实变量 $t$ 的光滑实函数 $f(t)$ 若仅在 $t=t_0$ 取得唯一最大值 $f(t_0)$，且该处二阶导数 $f''(t_0)\ (=d^2f/dt^2|_{t=t_0})$ 为负，则对足够大的正实数 $m$，有近似

$$
\int_{-\infty}^{\infty}dt\,e^{mf(t)}\simeq e^{mf(t_0)}\sqrt{\frac{-2\pi}{mf''(t_0)}}.
$$

(4) 对正实数 $\alpha$，用伽马函数和黎曼泽塔函数表示

$$
\int_0^\infty\frac{t^\alpha}{e^t-1}\,dt.
$$

其中黎曼泽塔函数定义为 $\zeta(s)=\sum_{n=1}^{\infty}1/n^s$。

**II-3B（实验物理）**

将 $\alpha$ 射线（原子序数 $Z=2$、质量数 $A=4$）照射到金薄膜，测量弹性散射后的角度和粒子数，可以求原子核的大小。设 $\alpha$ 粒子的动能为 $5\,\mathrm{MeV}$，将其视为经典库仑散射。如图 1，入射轨道延长线到原子核的最短距离为 $b$（通常称碰撞参数），实验室系中的散射角为 $\theta$，$\alpha$ 粒子轨道到原子核的最短距离为 $D$。金核（$Z=79,A=197$）远重于 $\alpha$ 粒子。为简便，设核子（质子、中子）的质量均为 $1.0\,\mathrm{GeV}/c^2$，电子质量为 $m_e=0.50\,\mathrm{MeV}/c^2$，元电荷为 $e$，光速 $c=3.0\times10^8\,\mathrm{m/s}$，真空介电常数为 $\varepsilon_0$。

![图1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2020/201908-II-3B-fig1.png)

(1) $D$ 随 $b$ 变化，而 $\alpha$ 粒子能够到达的最小接近距离 $D_{\min}$ 由初始动能等于金核静电势能的条件决定。求 $D_{\min}$ 的值。已知经典电子半径为 $e^2/(4\pi\varepsilon_0m_ec^2)=2.8\times10^{-15}\,\mathrm m$。

(2) 若每单位时间、单位面积有 $n$ 个 $\alpha$ 粒子入射金薄膜，求碰撞参数处于 $b\sim b+db$ 的粒子每单位时间的数量 $dn$。

(3) 入射粒子按 (1) 的经典库仑场散射模型运动，$\theta,D_{\min},b$ 满足

$$
\cot\frac\theta2=\frac{2b}{D_{\min}}.
$$

据此计算散射角处于 $\theta\sim\theta+d\theta$ 的粒子数 $dn(\theta)$，并用 $\theta,D_{\min}$ 表示可实际测量的微分截面 $d\sigma(\theta)/d\Omega$。$d\Omega$ 为立体角。由该微分截面的分布可得 $D_{\min}$，进而得到原子核尺寸的上限。

(4) 考虑测量向 $\theta=60^\circ$ 方向散射的 $\alpha$ 粒子。每单位面积、单位时间有 $N_a$ 个粒子入射金薄膜，薄膜每单位面积有 $N_b$ 个金原子。薄膜内散射概率很小，不会发生两次散射。如图 2，在金薄膜上方 $60^\circ$ 方向、距离 $r$ 处放置探测面积为 $S$ 的粒子计数器，每单位时间测得 $N_c$ 个粒子。探测效率为 $100\%$，$r$ 远大于金薄膜的尺寸。求 $d\sigma(\theta=60^\circ)/d\Omega$。

(5) 用 (4) 的实验值求 $D_{\min}$。

![图2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2020/201908-II-3B-fig2.png)

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
