---
sidebar_label: "2016年8月実施 専門 第4問"
tags:
  - Tokyo-University
  - Electrical-Electronic.Signal-Processing.Convolution-Theorem
  - Electrical-Electronic.Communications
---

# 東京大学 情報理工学系研究科 電子情報学専攻 2016年8月実施 専門 第4問

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$g^2(t)$ のフーリエ変換を

$$
L(\omega)=\frac1{2\pi}\int_{-\infty}^{\infty}G(\alpha)G(\omega-\alpha)\,d\alpha
$$

と定義する。ここで、$G(\omega)$ は信号 $g(t)$ のフーリエ変換である。以下の問いに答えよ。

(1) 伝送路の線形歪みとは何か簡単に述べよ。また、線形歪みを持つ伝送路にパルスを入力した場合、出力側で観測されるパルスへの影響を述べよ。

(2) 信号 $x(t)$ を $2$ 乗した信号 $x^2(t)$ の周波数帯域は $x(t)$ の $2$ 倍になることを証明せよ。

(3) 送信機の出力段が、入力 $x$、出力 $y$ で図のような非線形特性を持つとする。周波数変調（FM）波はこの非線形歪みの影響を受けずに受信回路で復調できることを、数式を用いて説明せよ。ここで、$x,y$ の値域は図に示すように振幅制限されているものとする。

(4) $M$ 値信号 $m(t)=\pm A/2,\pm3A/2,\ldots,\pm(M-1)A/2$ を用いた変調信号 $x(t)=m(t)\cos\omega_Ct$ をこの送信機の出力段を通して送信したとする。ここで、$M$ は偶数である。受信側で、この信号を復調した信号には、いかなる問題が生じるか簡単に述べよ。

(5) このような非線形歪みを伴う伝送路で信号を多重化したい。周波数多重（Frequency-Division Multiplexing, FDM）した場合と、時分割多重（Time-Division Multiplexing, TDM）した場合を比較し、選択するべき多重化方法と理由を述べよ。

図：原点を通る、奇対称で単調増加し、正負の大振幅で飽和する入出力特性。

![送信機出力段の非線形特性](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo-university/IST/denshi/denjo2017_q4_nonlinear.svg)

## **Kai**

### (1)

線形な伝送路の周波数特性を $H(\omega)$ とすると、信号帯域内で $H(\omega)=Ke^{-j\omega\tau}$ と表せないことによる波形の歪みである。振幅特性が一定でないか、位相特性が周波数に対して直線的でないと生じる。

パルスの周波数成分ごとの振幅・遅延が変化し、パルスの広がりやリンギングが生じる。連続したパルスでは符号間干渉の原因となる。

### (2)

$X(\omega)=0\ (|\omega|>\Omega)$ とする。$x^2(t)$ のスペクトルは

$$
Y(\omega)=\frac1{2\pi}\int X(\alpha)X(\omega-\alpha)\,d\alpha.
$$

被積分関数が非零となるには、$|\alpha|\le\Omega$ と $|\omega-\alpha|\le\Omega$ が同時に成立する必要がある。三角不等式より $|\omega|\le2\Omega$ が必要だから、$Y(\omega)=0$ for $|\omega|>2\Omega$ である。

$\Omega$ を非零実信号の実際の帯域端とする。コンパクトな台をもつスペクトルに対する畳み込みの端点加法則（Titchmarsh の定理）より

$$
\sup\operatorname{supp}(X*X)=2\sup\operatorname{supp}X=2\Omega,
\qquad
\inf\operatorname{supp}(X*X)=-2\Omega.
$$

従って帯域幅は実際に $2$ 倍となる。単に $[-\Omega,\Omega]$ がスペクトルを含む区間として与えられた場合には、上の積分から直接いえるのは帯域端が $2\Omega$ 以下ということである。

### (3)

FM 波を

$$
x(t)=A\cos\theta(t),\qquad
\theta(t)=\omega_Ct+k_f\int^t m(u)\,du
$$

とする。図の記憶を持たない奇対称な非線形特性を $F$ とすれば、振幅 $A$ が一定なので

$$
y(t)=F(A\cos\theta(t))
=a_1\cos\theta(t)+a_3\cos3\theta(t)+\cdots
$$

となり、係数 $a_1,a_3,\ldots$ は時間によらない。搬送波帯域の基本波 $a_1\cos\theta(t)$ を取り出して周波数検波すると、

$$
\boxed{\frac1{k_f}\left(\frac{d\theta}{dt}-\omega_C\right)=m(t).}
$$

したがって、振幅の非線形変化があっても位相に含まれる情報は保持される。ここでは基本波と高調波の帯域を分離できるものとする。

### (4)

振幅が情報を担うため、非線形圧縮により受信振幅の間隔が不均等になり、とくに大振幅側で識別間隔が狭くなる。飽和が強いと異なる振幅レベルを区別できず、復調誤りが増える。$M=2$ の対称な二値信号では、符号の違いは保持される。

### (5)

TDM を選ぶ。FDM では複数の周波数成分が同時に非線形素子へ入力され、$2f_i-f_j$ や $2f_i+f_j$ などの相互変調成分が生じ、他チャネルを妨害する。

TDM では異なる信号を異なる時刻に通すため、記憶を持たない非線形特性によるチャネル間の相互変調を避けられる。ただし、各信号自体の振幅歪みは残る。
