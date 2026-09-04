---
sidebar_label: 2017年3月実施 基礎科目 問題5 物理基礎
tags:
  - Tohoku-University
  - Physics.Mechanics.Rotating-Frame-Coriolis-and-Centrifugal-Forces
  - Mathematics.Linear-Algebra.Rotation-Matrix
---

# 東北大学 工学研究科 電気・情報系 2017年3月実施 基礎科目 問題5 物理基礎

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

Fig. 5(a) に示すように、半径 $R$ の薄い車輪が $X$–$Y$–$Z$ 慣性座標系で静止している（重力場は存在していない）。車輪の中心は座標原点に位置し、その回転軸は $Z$ 軸である。質量 $m_0$ の質点が、長くて質量のない糸により、車輪と接続されている。この糸は余すことなく時計回りで車輪に巻き付けられ、質点は車輪に接着されている。それから、車輪を $Z$ 軸の周りに一定の角周波数 $\omega_0$ で回転させる。ある時点で質点の接着剤が破断する。破断の時刻とその時の質点の位置を、それぞれ $t=0$ と $(X,Y,Z)=(R,0,0)$ とせよ。車輪の回転により徐々にほどけてゆく糸に取り付けられた質点の運動に関する以下の問に答えよ。車輪の厚さの影響は考える必要がない。必要があれば、遠心力 $-m\boldsymbol\omega\times(\boldsymbol\omega\times\boldsymbol r)$ とコリオリの力 $-2m\boldsymbol\omega\times\boldsymbol v$ の式を使ってよい。ここで、$m$ は質量、$\boldsymbol\omega$ は角速度、$\boldsymbol r$ は位置ベクトル、$\boldsymbol v$ は速度である。記号 $\times$ は外積の表示である。

(1) 最初に、車輪の回転方向が時計回りの場合を考えよう。Fig. 5(b) を見よ。

(a) $t=0$ での質点の速度は $X$–$Y$–$Z$ 座標系において $(0,-R\omega_0,0)$ で与えられることを示せ。

(b) $t>0$ での質点の位置は $X$–$Y$–$Z$ 座標系において $(R,-R\omega_0t,0)$ で与えられることを示せ。（ヒント：単位時間当たりにほどける糸の長さは $R\omega_0$ であることに注意せよ。）

(c) 糸の張力 $T$ はゼロであることを示せ。

(2) 次に、車輪の回転方向が反時計回りの場合を考えよう。この場合には糸の張力 $T\ne0$ が質点に作用する。従って、質点の運動は問 (1) の運動ほど単純ではない。

(a) この問題を扱うための便利な方法を考えよう。Fig. 5(c) を見よ。$z$ 軸が $Z$ 軸上にある $x$–$y$–$z$ 座標系は $Z$ 軸の周りに角周波数 $2\omega_0$ で反時計方向に回転しており、$t=0$ で $X$–$Y$–$Z$ 座標系と一致している。この座標系においては、問 (1) のように車輪は $z$ 軸周りに角周波数 $\omega_0$ で時計回りに回転し、このことは質点の位置が $(x,y,z)=(R,-R\omega_0t,0)$ で与えられることを示唆する。この示唆を確かめよう。

(i) $x$–$y$–$z$ 座標系において $(R,-R\omega_0t,0)$ に位置する質点に作用する遠心力とコリオリの力を計算し、それらの力の $x$ 成分は打ち消しあうことを示せ。

(ii) $T$ を計算し、$t>0$ でも糸は張ったままであることを示せ。

(iii) 示唆 $(x,y,z)=(R,-R\omega_0t,0)$ が正しいことを示せ。

(b) $X$–$Y$–$Z$ 座標系における質点の位置と速度を $t$ の関数として求めよ。

### 题目描述

无重力空间中，半径 $R$ 的薄轮以原点为中心、$Z$ 轴为转轴。质量 $m_0$ 的质点连接一根无质量长绳，绳沿顺时针完全缠绕在轮上，质点最初粘在轮缘。轮以角速率 $\omega_0>0$ 转动；$t=0$ 时粘接脱落，质点位于 $(R,0,0)$，绳随运动解绕。

1. 轮顺时针转动时：(a) 求脱落瞬间速度；(b) 证明 $t>0$ 时质点坐标为 $(R,-R\omega_0t,0)$；(c) 证明绳张力为零。
2. 轮逆时针转动时，取绕 $Z$ 轴以角速度 $2\omega_0$ 逆时针旋转的坐标系 $xyz$，初始时两坐标系重合。在该系中猜测质点坐标仍为 $(R,-R\omega_0t,0)$。
   - 求离心力和科里奥利力并证明 $x$ 分量抵消。
   - 求张力，证明 $t>0$ 时绳保持绷紧，验证上述轨迹。
   - 求惯性系中的位置与速度。

可用离心力 $-m\boldsymbol\Omega\times(\boldsymbol\Omega\times\boldsymbol r)$、科里奥利力 $-2m\boldsymbol\Omega\times\boldsymbol v$。

## **Kai**

### (1)

顺时针角速度为 $-\omega_0\boldsymbol e_Z$，故

$$
\boldsymbol v(0)=-\omega_0\boldsymbol e_Z\times R\boldsymbol e_X=(0,-R\omega_0,0).
$$

解绕速率为 $R\omega_0$，恰等于质点沿切线匀速离开的速率。因此

$$
\boxed{\boldsymbol r(t)=(R,-R\omega_0t,0)},\qquad \boxed{T=0}.
$$

### (2)

记 $w=\omega_0,m=m_0$。旋转系中 $\boldsymbol\Omega=(0,0,2w)$，猜测轨迹给出 $\boldsymbol v'=(0,-Rw,0)$，于是

$$
\boldsymbol F_{\rm cf}=(4mRw^2,-4mRw^3t,0),\qquad
\boldsymbol F_{\rm cor}=(-4mRw^2,0,0).
$$

绳从 $(R,0,0)$ 沿负 $y$ 方向伸出，张力沿正 $y$ 方向。令合力为零得

$$
\boxed{T=4mRw^3t>0\quad(t>0)}.
$$

此时旋转系加速度为零，且位置、速度均符合初值，因此猜测成立。

令 $\theta=2wt$，旋转矩阵为

$$
Q(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.
$$

惯性系位置与速度为

$$
\boxed{\begin{aligned}
X&=R\cos\theta+Rwt\sin\theta,\\
Y&=R\sin\theta-Rwt\cos\theta,\\
Z&=0,
\end{aligned}}
$$

$$
\boxed{\begin{aligned}
\dot X&=-Rw\sin\theta+2Rw^2t\cos\theta,\\
\dot Y&=Rw\cos\theta+2Rw^2t\sin\theta,\\
\dot Z&=0.
\end{aligned}}
$$
