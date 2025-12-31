---
sidebar_label: '2021年8月実施 プログラミング 第2問'
tags:
  - Tokyo-University
  - Programming
  - Least-Squares-Method
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2021年8月実施 プログラミング 第2問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki), [FunTotal](https://github.com/totalhuang)

## **Description (English)**

We store the daily numbers of newly infected people with some virus (*new infections*, below) in a text file in chronological order. The numbers are separated by colons (:). For example, when the numbers of new infections for 5 days are

`621 591 907 1121 1032`

the following text

`621:591:907:1121:1032`

is stored in a file.

### **Problem**

(1) Let $x_0,x_1,x_2,x_3,\dots,x_{n-1}$ be the numbers of new infections on every day stored in the text file `infections.txt`. We define the following function
$$
ave(i)=\frac{1}{7}\sum_{k=-3}^3 x_{i+k}
$$
where $3\le i<n-3$.

Calculate the maximum and minimum values of $ave(i)$ and write them on the answer sheet. Furthermore, calculate the sum $\sum_{i=3}^{n-4}ave(i)$ and write it on the answer sheet. Round those values to 4 decimal places.

(2) Let $x_0,x_1,x_2,x_3,\dots,x_{m-1}$ and $y_0,y_1,y_2,y_3,\dots,y_{n-1}$ be the numbers of new infections stored in text files $x$ and $y$, respectively ($m\ge n$). We define $s(x,y)$, the similarity score between these two files, as
$$
s(x,y)=-\min_i\sum_{k=0}^{n-1}(x_{k+i}-y_k)^2
$$
where $0\le i\le m-n$.

Among arbitrary pairs of two files in the folder `data`, find the pair with the highest similarity score and write the two file names on the answer sheet. Furthermore, write the similarity score on the answer sheet. When more than one such pair is found, write all the pairs and their scores.

(3) Let $x_0,x_1,x_2,x_3,\dots,x_{n-1}$ be the numbers of new infections stored in the text file `infections2.txt`. These numbers are denoted by $\{x_i\}$.

We find the approximate formula $ai+k$ that has a good fit to these numbers $\{x_i\}$. For example, the approximate value for $x_3$ is $3a+k$. Here, $a$ and $k$ are the constants that minimize the error $\sum_{i=0}^{n-1}(ai+k-x_i)^2$ for $\{x_i\}$. They are calculated as follows.
$$
a=\frac{n\sum ix_i-\sum i\sum x_i}{n\sum i^2-(\sum i)^2}\\
k=\frac{\sum i^2\sum x_i-\sum ix_i\sum i}{n\sum i^2-(\sum i)^2}
$$
where $\sum$ represents $\sum_{i=0}^{n-1}$.

Calculate $a$ and $k$ rounded to 4 decimal places and write them on the answer sheet.

(4) Let $x_0,x_1,x_2,x_3,\dots,x_{n-1}$ be the numbers of new infections stored in the text file `infections2.txt`. For a given $s$, a sub-sequence $x_s,x_{s+1},x_{s+2},\dots,x_{s+30}$ of these numbers is denoted by $\{x_{s+i}\}$. Here, $0\le s<n-30$.

We find the approximate formula $ka^i$ that has a good fit to a sub-sequence $\{x_{s+i}\}$. For example, the approximate value of $x_{s+3}$ is $ka^3$. Here, $a$ and $k$ are the constants that minimize this error
$$
\sum_{i=0}^{30}(\log_e ka^i-\log_e(x_{s+i}+1))^2
$$
for $\{x_{s+i}\}$.

Find $s$ such that it maximizes the value of $a$ in the approximate formula $ka^i$ for $\{x_{s+i}\}$. Write the values of $s,a,k$ for such $s$ on the answer sheet. Round $a$ and $k$ to 4 decimal places. When more than one such $s$ is found, write the values of $s,a,k$ for every $s$.

## **Kai**
The sample data files are [here](https://github.com/sophytoeat/Problem/tree/main/%E9%81%8E%E5%8E%BB%E5%95%8F/%E5%89%B5%E9%80%A0%E6%83%85%E5%A0%B1%E5%AD%A6/%E4%B8%80%E8%88%AC%E6%95%99%E8%82%B2%E7%A7%91%E7%9B%AE(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0)/2022%E5%B9%B4%E5%BA%A6_%E5%A4%8F_%E4%B8%80%E8%88%AC/%E9%85%8D%E5%B8%83%E3%83%86%E3%82%99%E3%83%BC%E3%82%BF).

### (1)
#### itsuitsuki's solution
```py
import numpy as np

conv_result = np.convolve(orig_infelst, np.array([1,1,1,1,1,1,1])/7, 'valid')
print(conv_result.max(), conv_result.min(), conv_result.sum())
```

The maximum is 1924.4286 and minimum 3.5714. The sum is 165579.5714.

#### FunTotal's solution
```c++
/*
按照题意模拟，c++要注意精度问题，由于没有数据文件，不知道题目的精度要求怎么样，保险起见用long long和long double尽量保持精度，除法也是最后再除
*/
#include <bits/stdc++.h>
#define int long long
#define db long double
using namespace std;
void solve() {
    ifstream fin("E:/UTokyo_Entrance_Exam/CI/2022_summer/infections.txt",
                 ios::in);
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2022_summer/ans21.txt", ios::out);
    if (!fin.is_open())
        assert(0);
    string str;
    fin >> str;
    vector<int> vec;  // 先处理文件输入读到vec里面
    int num = 0;
    for (auto ch : str) {  // 直接暴力逐字符读取, 可能有直接用库以冒号切割的方法
        if (ch == ':') {
            vec.push_back(num);
            num = 0;
        } else
            num = num * 10 + ch - '0';
    }
    vec.push_back(num);
    db mx = -1e9, mn = 1e9;
    int sum = 0, n = vec.size();
    for (int i = 3; i < n - 3; i++) {
        int tem = 0;
        for (int k = -3; k <= 3; k++)
            tem += vec[i + k];
        db ave = (db) tem / 7.0;
        mx = max(mx, ave), mn = min(mn, ave);
        sum += tem; //c++有浮点误差，尽量用整数，最后再统一除7.0
    }
    fout << fixed << setprecision(4) << "max ave = " << mx << "\n"
    << "min ave = " << mn << "\n"
    << "sum of ave = " << (db)((db)sum / 7.0) << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```

### (2)
#### itsuitsuki's solution

```py
def similarity_between_lists(l1, l2):
    l1 = np.array(l1)
    l2 = np.array(l2)
    if len(l1) < len(l2):
        t = l1
        l1 = l2
        l2 = t
    s = float('-inf')
    for i in range(len(l1) - len(l2) + 1):
        slice_1 = l1[i:i+len(l2)]
        tmp = ((slice_1 - l2)**2).sum()
        s = max(s, -tmp)
    return int(s)
```

```py
all_pairs = []
lists = [open(tmp).readline().split(':') for tmp in filelist]
lists = [[int(s) for s in l] for l in lists]
for i in range(len(lists)):
    for j in range(i+1, len(lists)):
        all_pairs += [(similarity_between_lists(lists[i], lists[j]), i, j)]
maximal = max(all_pairs)
print(maximal)
for pair in all_pairs:
    if pair[0] == maximal[0]:
        print(pair, filelist[pair[1]], filelist[pair[2]])
        
```

The highest similarity score is -6294. With data02.txt and data42.txt.

#### FunTotal's solution
```c++
/*
这题也是复用前面遍历文件夹的方法，按照题目的公式模拟一下
*/
#include <bits/stdc++.h>
#define int long long
#define pss pair<string, string>
using namespace std;
namespace fs = filesystem;
vector<int> readfile(string path) {
    ifstream fin(path, ios::in);
    if (!fin.is_open())
        assert(0);
    string str;
    fin >> str;
    vector<int> vec;  // 先处理文件输入读到vec里面
    int num = 0;
    for (auto ch : str) {  // 直接暴力逐字符读取, 可能有直接用库以冒号切割的方法
        if (ch == ':') {
            vec.push_back(num);
            num = 0;
        } else
            num = num * 10 + ch - '0';
    }
    vec.push_back(num);
    return vec;
}
int cal(string path1, string path2) {
    vector<int> x = readfile(path1), y = readfile(path2);
    if (x.size() < y.size()) swap(x, y);
    int m = x.size(), n = y.size();
    int point = 1e18;
    for (int i = 0; i <= m - n; i++) {
        int tem = 0;
        for (int k = 0; k <= n - 1; k++)
            tem += (x[k + i] - y[k]) * (x[k + i] - y[k]);
        point = min(point, tem);
    }
    return -point;
}
void solve() {
    string folder_path = "E:/UTokyo_Entrance_Exam/CI/2022_summer/data_forder/";
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2022_summer/ans22.txt", ios::out);
    vector<string> paths;
    for (const auto& entry : fs::directory_iterator(folder_path)) {
        if (entry.is_regular_file()) {
            string file_path = entry.path().string();
            try {
                paths.push_back(file_path);
            } catch (const exception& e) {
                cout << "Error processing file " << file_path << ": "
                     << e.what() << endl;
            }
        }
    }
    int mxpoint = -1e18;
    vector<pss> res;
    for (int i = 0; i < paths.size(); i++)
        for (int j = i + 1; j < paths.size(); j++) {
            int point = cal(paths[i], paths[j]);
            if (point > mxpoint) mxpoint = point, res.clear(), res.push_back({paths[i], paths[j]});
            else if (point == mxpoint) res.push_back({paths[i], paths[j]});
        }
    for (auto [a, b] : res)
        fout << "file names : " << a << " " << "and " << b << "\n";
    fout << "their scores are " << mxpoint << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```

### (3)
#### itsuitsuki's solution
```py
with open('infections2.txt') as f_infe:
    infelst2 = f_infe.readline().split(':')
    infelst2 = [int(s) for s in infelst2]
Y = np.array(infelst2)
n = len(infelst2)

X = np.arange(n)
all_1 = np.ones(n)
a = ((n * X @ Y) - X.sum() * Y.sum()) / (n * (X@X) - X.sum()**2)
print(float(a))

k = ((X@X) * Y.sum() - (X@Y) * X.sum()) / (n * (X@X) - (X.sum())**2)
print(float(k))

```

$a=1.4125,k=-100.4380$.

#### FunTotal's solution
```c++
/*
题目给出最小二乘法公式，按照题目计算一下，同样注意精度问题
*/
#include <bits/stdc++.h>
#define int long long
#define db long double
using namespace std;
void solve() {
    ifstream fin("E:/UTokyo_Entrance_Exam/CI/2022_summer/infections2.txt",
                 ios::in);
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2022_summer/ans23.txt", ios::out);
    if (!fin.is_open())
        assert(0);
    string str;
    fin >> str;
    vector<int> vec;  // 先处理文件输入读到vec里面
    int num = 0;
    for (auto ch : str) {  // 直接暴力逐字符读取, 可能有直接用库以冒号切割的方法
        if (ch == ':') {
            vec.push_back(num);
            num = 0;
        } else
            num = num * 10 + ch - '0';
    }
    vec.push_back(num);
    
    int sum_ixi = 0, sum_i = 0, sum_i2 = 0, sum_xi = 0;
    int n = vec.size();
    for (int i = 0; i < n - 1; i++) {
        sum_ixi += i * vec[i];
        sum_i += i;
        sum_xi += vec[i];
        sum_i2 += i * i;
    }
    db a = ((db)n * sum_ixi - sum_i * sum_xi) / (n * sum_i2 - (sum_i) * (sum_i));
    db k = ((db)sum_i2 * sum_xi - sum_ixi * sum_i) / (n * sum_i2 - sum_i * sum_i);
    fout << fixed << setprecision(4) << "a = " << a << ", k = " << k << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```

### (4)
#### itsuitsuki's solution

By plugging in the paradigm of (3), since $\log_e ka^i=i\log_e a + \log_e k$, and here $n=31$, given some fixed $s$, let $\log_e (x_{s+i}+1):=\tilde x_i$, then
$$
\log_e a=\frac{n\sum i\tilde x_i-\sum i\sum\tilde x_i}{n\sum i^2-(\sum i)^2}\\
\log_e k=\frac{\sum i^2\sum \tilde x_i-\sum i\tilde x_i\sum i}{n\sum i^2-(\sum i)^2}
$$
And we find the max of $a$ under different $s$.

```py
def metric_a_k(l, s): # sublen=31
    sub = l[s:s+31]
    X = np.arange(31)
    Y = np.log(sub + 1)
    loga = ((n * X @ Y) - X.sum() * Y.sum()) / (n * (X@X) - X.sum()**2)
    logk = ((X@X) * Y.sum() - (X@Y) * X.sum()) / (n * (X@X) - (X.sum())**2)
    return np.exp(loga), np.exp(logk)
infelst2 = np.array(infelst2)
a_s = []
k_s = []
for s in range(len(infelst2) - 30):
    a, k = metric_a_k(infelst2, s)
    a_s += [a]
    k_s += [k]
max_a = max(a_s)
for i, a in enumerate(a_s):
    if a == max_a:
        print(i,a,k_s[i]) # s,a,k
```

`(s,a,k)` is `(389, 1.4010, 1.1299)`.

#### FunTotal's solution
```c++
/*
这题有点思维含量，要注意到合理利用第三问的公式，取对数转换为第三问的线性问题。要注意c++没有loge函数，还需要用换底公式 loge x = log2(x) / log2(e), c++中的exp(x)函数是 e ^ x, exp(1) 即为自然对数e
*/
#include <bits/stdc++.h>
#define int long long
#define db long double
#define pii pair<int, int>
using namespace std;
vector<int> readfile(string path) {
    ifstream fin(path, ios::in);
    if (!fin.is_open())
        assert(0);
    string str;
    fin >> str;
    vector<int> vec;  // 先处理文件输入读到vec里面
    int num = 0;
    for (auto ch : str) {  // 直接暴力逐字符读取, 可能有直接用库以冒号切割的方法
        if (ch == ':') {
            vec.push_back(num);
            num = 0;
        } else
            num = num * 10 + ch - '0';
    }
    vec.push_back(num);
    return vec;
}
pii calak(vector<db> vec) { // 给定 x 求线性的最小拟合的 a 和 k
    db sum_ixi = 0, sum_i = 0, sum_i2 = 0, sum_xi = 0;
    int n = vec.size();
    for (int i = 0; i < n - 1; i++) {
        sum_ixi += i * vec[i];
        sum_i += i;
        sum_xi += vec[i];
        sum_i2 += i * i;
    }
    db a =
        ((db)n * sum_ixi - sum_i * sum_xi) / (n * sum_i2 - (sum_i) * (sum_i));
    db k =
        ((db)sum_i2 * sum_xi - sum_ixi * sum_i) / (n * sum_i2 - sum_i * sum_i);
    return {exp(a) * 10000, exp(k) * 10000};
}
void solve() {
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2022_summer/ans24.txt", ios::out);
    vector<int> vec = readfile("E:/UTokyo_Entrance_Exam/CI/2022_summer/infections3.txt");
    vector<array<int, 3>> res;
    int mxa = -1e18;
    int n = vec.size();
    for (int s = 0; s < n - 30; s++) {
        vector<db> x;
        for (int i = s; i <= s + 30; i++)    
            x.push_back(log(vec[i] + 1) / log(exp(1)));
        auto [a, k] = calak(x);
        if (a > mxa) mxa = a, res.clear(), res.push_back({s, a, k});
        else if (a == mxa) res.push_back({s, a, k});
    }
    for (auto [s, a, k] : res) {
        fout << fixed << setprecision(4) << "s = " << s << ", a = " << a / 1e4 << ", k = " << k / 1e4 << "\n";
    }
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```




