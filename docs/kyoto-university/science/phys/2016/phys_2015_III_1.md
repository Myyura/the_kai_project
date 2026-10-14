---
sidebar_label: "2016年度 III-1（量子力学）"
tags:
  - Kyoto-University
  - Physics.Electromagnetism.Lorentz-Force-and-Charged-Particle-Motion
  - Physics.Quantum-Mechanics.Canonical-Commutation-Relations
  - Physics.Quantum-Mechanics.Creation-and-Annihilation-Operators
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2016年度 III-1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

下図の軸対称な電極 I、II、III と $+z$ 方向の一様磁場 $B>0$ を用いて、質量 $m$、電荷 $q>0$ の非相対論的粒子を原点付近に閉じ込める。原点近傍のポテンシャルは

$$
\phi=-\frac\kappa2(x^2+y^2-2z^2),\qquad
\boldsymbol A=\left(-\frac{By}{2},\frac{Bx}{2},0\right).
$$

重力は無視する。

![軸対称な電極 I・II・III と座標（原題）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2016-III-1-fig1.png)

1. 古典運動を考える。
   - (a) $x,y,z$ の運動方程式を書け。
   - (b) $\zeta=x+iy$ とすると $m\ddot\zeta=-iqB\dot\zeta+q\kappa\zeta$。解を $\zeta=C_1e^{-i\omega_1t}+C_2e^{-i\omega_2t}$、$\omega_{1,2}=\omega_c/2\pm\Delta$ と書き、$\omega_c,\Delta$ を求めよ。
   - (c) 閉じ込めのための $\kappa$ の条件を求めよ。以後この条件と $\Delta>0$ を仮定する。
2. $L=m\dot{\boldsymbol r}^{2}/2-q\phi+q\boldsymbol A\cdot\dot{\boldsymbol r}$ を用いる。
   - (a) 正準運動量 $p_x,p_y$ を求めよ。
   - (b) $\eta=p_x+ip_y$ を $\zeta,\dot\zeta$ で表せ。上の解を入れると $\eta=-im\Delta(C_1e^{-i\omega_1t}-C_2e^{-i\omega_2t})$ となる。
3. ハミルトニアンを $H_{xy}+H_z$ に分けて書け。

以後量子論を考える。ハミルトニアンが二次式なので、ハイゼンベルク表示の $\zeta,\eta$ の時間依存性は上式と同じであり、$C_1,C_2$ は演算子となる。

4. ハイゼンベルク方程式を用い、$[H_{xy},C_1]$、$[H_{xy},C_2]$ を求めよ。
5. (a) $C_1,C_2$ を $\zeta,\eta$ の線形結合で表せ。(b) 正準交換関係から $[C_1,C_1^\dagger]=\hbar/(m\Delta)$ を示せ。他に $[C_2,C_2^\dagger]=-\hbar/(m\Delta)$、残りはゼロとしてよい。(c) $C_1=\kappa_1a,C_2=\kappa_2b^\dagger$、$[a,a^\dagger]=[b,b^\dagger]=1$ となる正定数 $\kappa_1,\kappa_2$ を求めよ。
6. (a) 定数項を省き $H_{xy}=ra^\dagger a+sb^\dagger b$ と書くときの $r,s$ を求めよ。(b) 固有値と最小値の有無を答えよ。(c) $a|0\rangle=b|0\rangle=0$ で定義される状態から規格化固有状態を書け。

#### 题目描述

使用上图中的轴对称电极 I、II、III 及沿 $+z$ 的均匀磁场 $B>0$ 俘获质量 $m$、正电荷 $q$ 的非相对论粒子。忽略重力，近原点有

$$
\phi=-\kappa(x^2+y^2-2z^2)/2,\qquad \boldsymbol A=(-By/2,Bx/2,0).
$$

1. (a) 写经典运动方程；(b) 令 $\zeta=x+iy$，其解为 $C_1e^{-i\omega_1t}+C_2e^{-i\omega_2t}$，$\omega_{1,2}=\omega_c/2\pm\Delta$，求 $\omega_c,\Delta$；(c) 求可稳定闭合运动的 $\kappa$ 范围，后续取 $\Delta>0$。
2. 由 $L=m\dot{\boldsymbol r}^{2}/2-q\phi+q\boldsymbol A\cdot\dot{\boldsymbol r}$：(a) 求 $p_x,p_y$；(b) 用 $\zeta,\dot\zeta$ 表示 $\eta=p_x+ip_y$，并得到 $\eta=-im\Delta(C_1e^{-i\omega_1t}-C_2e^{-i\omega_2t})$。
3. 将哈密顿量分为 $H_{xy}+H_z$。

量子化后，海森堡表示仍有上述时间形式，但 $C_1,C_2$ 为算符。

4. 求 $[H_{xy},C_i]$。
5. (a) 用 $\zeta,\eta$ 表示 $C_i$；(b) 验证 $[C_1,C_1^\dagger]=\hbar/(m\Delta)$，可用 $[C_2,C_2^\dagger]=-\hbar/(m\Delta)$、其余为零；(c) 令 $C_1=\kappa_1a,C_2=\kappa_2b^\dagger$，两组玻色算符满足标准对易关系，求正数 $\kappa_1,\kappa_2$。
6. (a) 忽略常数将 $H_{xy}$ 写成 $ra^\dagger a+sb^\dagger b$；(b) 求能级及是否有最小值；(c) 从两湮灭算符的共同真空写出归一化本征态。

## **Kai**

### (1a)
$\boldsymbol E=-\nabla\phi=(\kappa x,\kappa y,-2\kappa z)$、$\boldsymbol B=B\boldsymbol e_z$ より

$$
\boxed{m\ddot x=q\kappa x+qB\dot y,\quad
m\ddot y=q\kappa y-qB\dot x,\quad
m\ddot z=-2q\kappa z}.
$$

### (1b)
$\zeta\propto e^{-i\omega t}$ を代入すると $m\omega^2-qB\omega+q\kappa=0$ なので

$$
\boxed{\omega_c=\frac{qB}{m},\qquad
\Delta=\sqrt{\frac{\omega_c^2}{4}-\frac{q\kappa}{m}}}.
$$

### (1c)
$z$ 方向の束縛には $\kappa>0$、$xy$ 方向の一般解が有界であるには異なる実根が必要なので

$$
\boxed{0<\kappa<\frac{qB^2}{4m}}.
$$

上端では重根に伴う $t e^{-i\omega_ct/2}$ が現れるため除外する。
### (2a)

$$
\boxed{p_x=m\dot x-\frac{qB}{2}y,\qquad
p_y=m\dot y+\frac{qB}{2}x}.
$$

### (2b)

$$
\boxed{\eta=m\dot\zeta+\frac i2m\omega_c\zeta
=-im\Delta(C_1e^{-i\omega_1t}-C_2e^{-i\omega_2t})}.
$$

### (3)
$H=(\boldsymbol p-q\boldsymbol A)^2/(2m)+q\phi$ より

$$
\boxed{H_{xy}=\frac{(p_x+qBy/2)^2+(p_y-qBx/2)^2}{2m}
-\frac{q\kappa}{2}(x^2+y^2)},
$$

$$
\boxed{H_z=\frac{p_z^2}{2m}+q\kappa z^2}.
$$

### (4)
$\dot\zeta=(i/\hbar)[H_{xy},\zeta]$ に時間依存性を入れて異なる指数関数の係数を比較すると

$$
\boxed{[H_{xy},C_1]=-\hbar\omega_1C_1,\qquad
[H_{xy},C_2]=-\hbar\omega_2C_2}.
$$

### (5a)

$$
\boxed{C_1=\frac12\left(\zeta+\frac{i\eta}{m\Delta}\right)e^{i\omega_1t},\qquad
C_2=\frac12\left(\zeta-\frac{i\eta}{m\Delta}\right)e^{i\omega_2t}}.
$$

### (5b)
正準関係から $[\zeta,\eta^\dagger]=2i\hbar$、$[\eta,\zeta^\dagger]=-2i\hbar$、$[\zeta,\zeta^\dagger]=[\eta,\eta^\dagger]=0$。よって

$$
[C_1,C_1^\dagger]=\frac14\left[-\frac i{m\Delta}[\zeta,\eta^\dagger]
+\frac i{m\Delta}[\eta,\zeta^\dagger]\right]
=\boxed{\frac\hbar{m\Delta}}.
$$

### (5c)

$$
\boxed{\kappa_1=\kappa_2=\sqrt{\frac\hbar{m\Delta}}}.
$$

$C_2$ の交換関係が負なので、$C_2$ は $b$ でなく $b^\dagger$ に比例する。
### (6a)
$[H_{xy},a]=-\hbar\omega_1a$、$[H_{xy},b]=+\hbar\omega_2b$ なので

$$
\boxed{r=\hbar\omega_1,\qquad s=-\hbar\omega_2}.
$$

### (6b)
問題の指定通り定数項を省いたエネルギーは

$$
\boxed{E_{n_1n_2}=\hbar\omega_1n_1-\hbar\omega_2n_2,
\qquad n_1,n_2=0,1,2,\ldots}.
$$

$0<\omega_2<\omega_1$ なので $n_2\to\infty$ で $E\to-\infty$、最小値は存在しない。元のハミルトニアンでは定数 $\hbar(\omega_1-\omega_2)/2$ を戻すが、この結論は変わらない。
### (6c)

$$
\boxed{|n_1,n_2\rangle=\frac{(a^\dagger)^{n_1}(b^\dagger)^{n_2}}{\sqrt{n_1!n_2!}}|0\rangle}.
$$

共通真空は基底エネルギー状態を意味しない。

## **Reference**

- [京都大学公式問題（2016年度、PDF 16–17ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H28.pdf)
