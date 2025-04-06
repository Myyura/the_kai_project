---
sidebar_label: '2018年8月実施 プログラミング'
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2018年8月実施 プログラミング

## **Author**
[tomfluff](https://github.com/tomfluff), [FunTotal](https://github.com/FunTotal)

## **Description**
A text file contains integers from $0$ to $255$ which are separated by a single white-space character.
Assume that the number of these integers is a multiple of three.
Group every three numbers into a triplet. Each triplet represents the intensities of red, green, and blue of a pixel. For example,

```text
19 7 0 17 13 1 29 3 27 5 11 23
```

are grouped into four triplets (or pixels), which are $(19, 7, 0)$, $(17, 13, 1)$, $(29, 3, 27)$, and $(5, 11, 23)$.
Every pixel has an index. The index of the pixel is i if it is the i-th triplet ($i \geq 0$) in the file.
In the example above, $(19, 7, 0)$ is the 0th triplet.

We can construct an image by placing these integer triplets, or pixels, from left to right, and when reaching the width of the image, placing them in the next line below, and so forth.
Assume that the image is rectangular. Answer the following questions by writing a program if necessary.

(1) Write on the answer sheet the number of the pixels stored in the file `image1.txt`.

(2) We construct an image from the pixels stored in the file `image1.txt`.
All the rightmost pixels of the image are white, that is, the triplet $(255, 255, 255)$.
The image includes no other white vertical line from the top to the bottom than the rightmost one. Write the width of the image on the answer sheet.

(3) Write a program that prints the $\frac{n}{2}$-th triplet (or pixel) and its index when sorting the pixels stored in the file `image1.txt` in the ascending order of intensities.
Write down the printed triplet and index on the answer sheet, too. 
Here, $n$ is the number of the pixels and it is an even number. 
The first pixel is the zeroth triplet. The intensity of a pixel is $r^2 + g^2 + b^2$ when the triplet $(r, g, b)$ denotes the pixel. 
If there are two pixels with the same intensity, the pixel with a larger index has a lower intensity.

(4) Write a program that selects $k$ pixels $e_i$, where $0 \leq i < k$, from the pixels stored in the file `image2.txt`.
The program prints the triplets and the indices denoting these $k$ pixels.
Here, $e_i$ is the $\frac{ni}{k}$-th pixel when the pixels are sorted in the order mentioned in (3).
$n$ is the number of pixels and $n$ is a multiple of $k$.

Write on the answer sheet all the triplets of the pixels and their indices selected when $k = 4$.

(5) Write a program that selects $k$ colors representing all the pixels stored in the given file.
$k$ is an input. The $k$ representing colors are selected as follows:

- 1. Select $k$ pixels $e_i$ as mentioned in (4). Let them initial representative pixels $p^{(0)}_i = e_i$.
- 2. Categorize all the pixels into $k$ clusters. For each pixel $q_j$, find the nearest representative pixel $p^{(t)}_i$. Then the pixel $q_j$ belongs to a cluster $C^{(t)}_i$, where $t \geq 0$. The representative pixel $p^{(t)}_i$ belongs to the cluster $C^{(t)}_i$.
- 3. Compute the centroid of each cluster $C^{(t)}_i$. In $C^{(t)}_i$, the nearest pixel to that centroid is a new representative pixel $p^{(t+1)}_i$. Here, the centroid of pixels is a triplet of the averages (use the floor function after division) of each element $(r, g, b)$ of the pixels.
- 4. Categorize pixels again into $k$ clusters $C^{(t+1)}_i$ by using the new representative pixels $p^{(t+1)}_i$.
- 5. Repeat this ten times and obtain $k$ representative pixels $p^{(10)}_i$. The colors we want to obtain are the triplets of these representative pixels.

The distance between two triplets $(r_i, g_i, b_i)$ and $(r_j, g_j, b_j)$ is $|r_i - r_j| + |g_i - g_j| + |b_i - b_j|$.
For 2 and 3, if multiple pixels have the same distance, select the pixel with the largest index.

Then, compute the representative pixels $p^{(10)}_i$ of the pixels stored in the file `image2.txt` when $k = 128$.
Write on the answer sheet the triplets of $p^{(10)}_i$ where $i = 40, 80, 120$.
Do the same thing for `image3.txt` when $k = 8$, $i = 2, 4, 6$.

(6) Write a program that reduces the number of colors used in the given image in the method mentioned in (5).
The program reads the image from a file and stores the resulting image into a file `image.tif` in the format shown below.
Assume that the shape of the image is square.
After the reduction, the pixels in a cluster $C^{(10)}_i$ are set to the color of its representative pixel $p^{(10)}_i$.
Then, assuming $k = 32$, reduce the number of colors for the image in the file `image2.txt` and save the obtained `image.tif` into the USB flash drive.

The format of the file `image.tif` is as follows. It consists of 104-byte attribute information and pixel data. Each byte of the first 104 bytes in the file is the following number (in decimal notation), respectively.

```text
77,77,0,42,0,0,0,8,0,7,1,0,0,4,0,0,
0,1,w0,w1,w2,w3,1,1,0,4,0,0,0,1,h0,h1,
h2,h3,1,2,0,3,0,0,0,3,0,0,0,98,1,6,
0,3,0,0,0,1,0,2,0,0,1,17,0,4,0,0,
0,1,0,0,0,104,1,21,0,3,0,0,0,1,0,3,
0,0,1,23,0,4,0,0,0,1,s0,s1,s2,s3,0,0,
0,0,0,8,0,8,0,8
```

Here, w0 w1 w2 w3, h0 h1 h2 h3, and s0 s1 s2 s3 denote the 4 byte big-endian values representing the width, the height, and (width) x (height) x 3.

After these 104 bytes, the pixels of the image are stored from the top to the bottom line.
For each line, the pixels are stored from left to right. For each pixel, each element of the triplet $(r, g, b)$ is stored in this order as a 1-byte value.
For example, when the width is $100$ pixels and the height is $50$ pixels, then $15104$ bytes of data in total are stored.

## **Kai**
Please click [here](https://github.com/tomfluff/UTokyo_CI_Entrance_Exam/tree/main/2019-Summer) for the sample data files.

### (1)
#### tomfluff's solution

```python
def main():
    lines = []
    pxls = []
    with open('2019-Summer/image1.txt', 'r') as f:
        lines = f.readlines()
    
    for l in lines:
        ns = l.strip().split(' ')
        for i in range(0,len(ns),3):
            pxls.append((ns[i],ns[i+1],ns[i+2]))
    
    print(f"No. of pixels: {len(pxls)}")

if __name__ == "__main__":
    main()
```

#### FunTotal's solution

C++ solution:

```c++
/*
本题考察读入, 结果为:129600
*/
#include <bits/stdc++.h>
using namespace std;
void solve() {
    ifstream fin("E:/UTokyo_Entrance_Exam/CI/2019_summer/image1.txt", ios::in);
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2019_summer/ans1.txt", ios::out);
    vector<int> vec;
    int num;
    while (fin >> num)
        vec.push_back(num);
    fout << vec.size() / 3 << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--) solve();
    return 0;
}
```

### (2)
#### tomfluff's solution

```python
from locale import atoi

WHITE = (255,255,255)

def get_image_width(pxls, width_op):
    width = 0
    for w in width_op:
        b_is_width = True
        for i in range(w-1,len(pxls),w):
            if pxls[i] != WHITE:
                b_is_width = False
        if b_is_width:
            width = w
            break
    return width

def update_width_options(pxls, width_op):
    if pxls[-1] == WHITE:
        b_add = True
        for w in width_op:
            if len(pxls) % w == 0:
                b_add = False
                break
        if b_add:
            width_op.append(len(pxls))

def main():
    lines = []
    pxls = []
    width_op = []
    with open('2019-Summer/image1.txt', 'r') as f:
        lines = f.readlines()
    
    for l in lines:
        ns = [atoi(x) for x in l.strip().split(' ')]
        for i in range(0,len(ns),3):
            pxls.append((ns[i],ns[i+1],ns[i+2]))
            update_width_options(pxls, width_op)
    width = get_image_width(pxls, width_op)
    
    print(f"Width of image: {width}")

if __name__ == "__main__":
    main()
```

#### FunTotal's solution

C++ solution:
```c++
/*
简单模拟, 比较严谨的做法是这样枚举每个白色作为第一行的右端点, 检验它竖下来的每个像素是不是
都是白色的。当然其实也可以把白色的像素位置都存起来，肉眼观察第一个是480，直接去check一下480
这个答案对不对，注意下标0开始还是1开始。

运行结果为 480
*/
#include <bits/stdc++.h>
#define pii pair<int, int>
#define tii tuple<int, int, int>
using namespace std;
void solve() {
    ifstream fin("E:/UTokyo_Entrance_Exam/CI/2019_summer/image1.txt", ios::in);
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2019_summer/ans2.txt", ios::out);
    // freopen("E:/UTokyo_Entrance_Exam/CI/2019_summer/image1.txt", "r", stdin);
    // if (!fin.is_open()) assert(0);
    vector<tii> vec;
    int num1, num2, num3;
    while (fin >> num1 >> num2 >> num3) {
        vec.push_back({num1, num2, num3});
    }
    int n = vec.size();
    vector<int> is_white(n);
    vector<int> whites;
    for (int i = 0; i < n; i++)
        if (vec[i] == tii{255, 255, 255}) {
            is_white[i] = 1;
            whites.push_back(i);
        }
    for (int i = 0; i < whites.size(); i++) {
        // 枚举第一行最右边的白色格子
        int flag = 1;
        for (int j = whites[i]; j < n; j += whites[i] + 1)
            flag &= is_white[j] == 1;
        if (flag) {
            fout << whites[i] + 1 << "\n";
            break;
        }
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

### (3)
#### tomfluff's solution

```python
from locale import atoi

WHITE = (255,255,255)

def main():
    lines = []
    pxls = []
    width = 0
    with open('2019-Summer/image1.txt', 'r') as f:
        lines = f.readlines()
    
    # Assume file is a one-line file
    for l in lines:
        ns = [atoi(x) for x in l.strip().split(' ')]
        for i in range(0,len(ns),3):
            pxls.append((ns[i],ns[i+1],ns[i+2],i//3))
    
    pxls_sr = sorted(pxls, key=lambda x: x[3], reverse=True)
    pxls_sr = sorted(pxls_sr, key=lambda x: x[0]*x[0]+x[1]*x[1]+x[2]*x[2])
    
    print(f"N/2th pixel: {pxls_sr[len(pxls_sr)//2][0:3]}, index {pxls_sr[len(pxls_sr)//2][3]}")

if __name__ == "__main__":
    main()
```

#### FunTotal's solution

C++ solution:

```c++
/*
也是简单模拟, c++里面可以对sort函数添加自定义比较规则, 运行的结果是:
N/2th pixel: (254 2 124), index 48312
*/
#include <bits/stdc++.h>
#define pii pair<int, int>
#define tii tuple<int, int, int>
using namespace std;
struct Node {
    int a, b, c, val, id;
};
bool cmp(Node a, Node b) {
    if (a.val != b.val) return a.val < b.val;
    else return a.id > b.id;
}
int cal(int a, int b, int c) {
    return a * a + b * b + c * c;
}
void solve() {
    ifstream fin("E:/UTokyo_Entrance_Exam/CI/2019_summer/image1.txt", ios::in);
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2019_summer/ans3.txt", ios::out);
    vector<tii> vec;
    int num1, num2, num3;
    vector<Node> vec2;
    int cnt = 0;
    while (fin >> num1 >> num2 >> num3) {
        vec.push_back({num1, num2, num3});
        vec2.push_back(Node{num1, num2, num3, cal(num1, num2, num3), cnt++});
    }
    sort(vec2.begin(), vec2.end(), cmp);
    int n = vec2.size();
    Node ans = vec2[n / 2];
    fout << "N/2th pixel: (" << ans.a << " " << ans.b << " " << ans.c << "), index " << ans.id << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
···

### (4)
#### tomfluff's solution

```python
from locale import atoi

WHITE = (255,255,255)

def main():
    lines = []
    pxls = []
    k = 4
    with open('2019-Summer/image2.txt', 'r') as f:
        lines = f.readlines()
    
    # Assume file is a one-line file
    for l in lines:
        ns = [atoi(x) for x in l.strip().split(' ')]
        for i in range(0,len(ns),3):
            pxls.append((ns[i],ns[i+1],ns[i+2],i//3))
            
    pxls_sr = sorted(pxls, key=lambda x: x[3], reverse=True)
    pxls_sr = sorted(pxls_sr, key=lambda x: x[0]*x[0]+x[1]*x[1]+x[2]*x[2])

    p = len(pxls_sr)//k
    for i in range(k):
        print(f"e({i}) pixel: {pxls_sr[p*i][0:3]}, index {pxls_sr[p*i][3]}")    

if __name__ == "__main__":
    main()
```

#### FunTotal's solution

C++ solution:

```c++
/*
和上一题基本一样, 运行的结果是:
e(0) pixel: (0 0 0), index 302362
e(1) pixel: (88 88 88), index 30632
e(2) pixel: (124 124 124), index 338140
e(3) pixel: (155 155 155), index 1111164

*/
#include <bits/stdc++.h>
#define pii pair<int, int>
#define tii tuple<int, int, int>
using namespace std;
struct Node {
    int a, b, c, val, id;
};
bool cmp(Node a, Node b) {
    if (a.val != b.val)
        return a.val < b.val;
    else
        return a.id > b.id;
}
int cal(int a, int b, int c) {
    return a * a + b * b + c * c;
}
void solve() {
    ifstream fin("E:/UTokyo_Entrance_Exam/CI/2019_summer/image2.txt", ios::in);
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2019_summer/ans4.txt", ios::out);
    vector<tii> vec;
    int num1, num2, num3;
    vector<Node> vec2;
    int cnt = 0;
    while (fin >> num1 >> num2 >> num3) {
        vec.push_back({num1, num2, num3});
        vec2.push_back(Node{num1, num2, num3, cal(num1, num2, num3), cnt++});
    }
    sort(vec2.begin(), vec2.end(), cmp);
    int n = vec2.size(), k = 4;
    for (int i = 0; i < 4; i++) {
        Node ei = vec2[n * i / k];
        fout << "e(" << i << ") pixel: (" << ei.a << " " << ei.b << " " << ei.c << "), index " << ei.id << "\n";
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

### (5)
#### tomfluff's solution

```python
from locale import atoi


def p_distance(p1,p2):
    return abs(p1[0]-p2[0])+abs(p1[1]-p2[1])+abs(p1[2]-p2[2])

def find_cluster_index(p, clus_arr):
    best_c = 0
    best_d = 3*255
    for i in range(len(clus_arr)):
        d = p_distance(p,clus_arr[i])
        if d < best_d:
            best_d = d
            best_c = i
    
    return best_c

def get_inital_representatives(pxls,k):
    pxls.reverse()
    pxls_sr = sorted(pxls, key=lambda x: x[0]*x[0]+x[1]*x[1]+x[2]*x[2])
    pxls.reverse()

    p = len(pxls_sr)//k
    rps = []
    for i in range(k):
        rps.append(pxls_sr[p*i])
    
    return rps

def find_next_representatives(pxls, cens):
    repr = []
    for c in cens:
        best_d = 255*3
        best_p = -1
        for i in range(len(pxls)):
            d = p_distance(pxls[i],c)
            if d < best_d:
                best_d = d
                best_p = i
            elif d == best_d:
                if pxls[i][3] > pxls[best_p][3]:
                    best_p = i
        repr.append(pxls[best_p])
    return repr


# Can make this whole faster by using numpy, should consider upgrading
def main():
    pxls = []
    k = 128
    iter_lm = 10

    lines = []
    with open('2019-Summer/image1.txt', 'r') as f:
        lines = f.readlines()
    
    for l in lines:
        ns = [atoi(x) for x in l.strip().split(' ')]
        for i in range(0,len(ns),3):
            pxls.append((ns[i],ns[i+1],ns[i+2],i//3))
    
    repr = get_inital_representatives(pxls,k)

    for i in range(iter_lm+1):
        cens = [(0,0,0) for _ in repr]
        cens_i = [list() for _ in repr]
        n_check = len(pxls)
        for px in pxls:
            c_i = find_cluster_index(px,repr)
            cens_i[c_i].append(px[3])
        for i in range(len(cens)):
            for j in cens_i[i]:
                cens[i] = (cens[i][0]+pxls[j][0]/len(cens_i[i]), cens[i][1]+pxls[j][1]/len(cens_i[i]), cens[i][2]+pxls[j][2]/len(cens_i[i]))
            n_check -= len(cens_i[i])
        assert n_check == 0
        # find new reps
        repr = find_next_representatives(pxls, cens)
    for i in range(len(repr)):
        if i in [40,80,120]:
            print(f"p(i={i}): {repr[i]}")

if __name__ == "__main__":
    main()
```

#### FunTotal's solution

C++ solution:

```c++
/*
这一题就明显能看出来c++的优势了, 对于这种不涉及太多计算,
主要是按照题意模拟的题用C++ 速度快很多,大概十几秒就跑出来结果,

楼上的py代码有比较明显的bug，每个聚类的初始元素就求错了，但是它第四问的结果是对的，而且在迭代
过程里，题意是只在每个聚类内寻找距离重心最近的点，而他的代码是遍历所有的点，而且在求重心过程里
他没用floor函数，这也可能导致不同。还有楼上的py代码在对每个点找归属的类时忘记判断等距离情况，
我调了半天才发现这个bug，在修改了上述bug后，用改进的py代码跑出来的结果跟我的c++结果相同。

image2.txt得到的结果是:
p(i=40): (98 98 98) , index 1639792
p(i=80): (137 137 137) , index 1639595
p(i=120): (181 181 181) , index 1639802

image3.txt得到的结果是:
p(i=2): (29 34 50) , index 1061557
p(i=4): (52 66 101) , index 1040155
p(i=6): (83 142 207) , index 327456

*/
#include <bits/stdc++.h>
#define int long long
#define tii tuple<int, int, int>
using namespace std;
struct Node {
    int a, b, c, val, id;
};
bool cmp(Node a, Node b) {
    if (a.val != b.val)
        return a.val < b.val;
    else
        return a.id > b.id;
}
int cal(int a, int b, int c) {
    return a * a + b * b + c * c;
}
int dis(Node a, Node b) {
    return abs(a.a - b.a) + abs(a.b - b.b) + abs(a.c - b.c);
}
void solve() {
    ifstream fin("E:/UTokyo_Entrance_Exam/CI/2019_summer/image3.txt", ios::in);
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2019_summer/ans53.txt", ios::out);
    vector<tii> vec;
    int num1, num2, num3;
    vector<Node> vec2;
    int cnt = 0;
    while (fin >> num1 >> num2 >> num3) {
        vec.push_back({num1, num2, num3});
        vec2.push_back(Node{num1, num2, num3, cal(num1, num2, num3), cnt++});
    }
    sort(vec2.begin(), vec2.end(), cmp);
    int n = vec2.size(), k = 8;
    vector<Node> repre(k); // k个代表元素
    vector<int> is_repre(n);
    for (int i = 0; i < k; i++) {
        Node ei = vec2[n * i / k];
        repre[i] = ei;
        is_repre[ei.id] = 1;
    }
    for (int repeat = 1; repeat <= 10; repeat++) {
        vector<vector<Node>> group;
        group.resize(k); // 开 k 个vector, 存每个group里面有哪些三元组
        for (int i = 0; i < k; i++)
            group[i].push_back(repre[i]); //先把代表元素放进去
        // 枚举三元组, 遍历找最近的聚类
        for (int i = 0; i < n; i++) {
            Node now = vec2[i];
            if (is_repre[now.id]) continue; // 去掉代表元素
            int i_bel = 0; // 当前元素属于的聚类编号
            for (int j = 1; j < k; j++) {
                if (dis(now, repre[j]) < dis(now, repre[i_bel]) 
                || dis(now, repre[j]) == dis(now, repre[i_bel]) && repre[j].id > repre[i_bel].id) {
                    // 距离更近或者距离相同编号更大
                    i_bel = j;
                }
            }
            group[i_bel].push_back(now);
        }
        // 重新算每个聚类里的代表元素
        for (int i = 0; i < k; i++) {
            Node centroid = Node{0, 0, 0, 0, 0}; // 每个聚类的重心
            for (auto [a, b, c, val, id] : group[i]) {
                centroid.a += a, centroid.b += b, centroid.c += c;
            }
            // c++整形默认向下整除, 也可以用浮点数再floor取整, 可能还得加个eps
            centroid.a /= group[i].size(), centroid.b /= group[i].size(), centroid.c /= group[i].size();
            // 找组里离重心最近的作为新的代表元素
            Node newrepre = repre[i];
            for (auto it : group[i]) {
                if (dis(it, centroid) < dis(newrepre, centroid) ||
                dis(it, centroid) == dis(newrepre, centroid) && it.id > newrepre.id) {
                    newrepre = it;
                }
            }
            is_repre[repre[i].id] = 0;
            repre[i] = newrepre;
            is_repre[repre[i].id] = 1;
        }
    }
    for (auto id : {2, 4, 6}) {
        fout << "p(i=" << id << "): (" << repre[id].a << " " << repre[id].b
             << " " << repre[id].c << ") , index " << repre[id].id << "\n";
    }
}
signed main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```

Python solution:

```python
# 基于楼上的py代码改进后的代码，image3.txt的结果跟我的c++代码相同, image2.txt跑不出来, python速度还是比不了c++的，估计结果也是一样
from locale import atoi
from math import floor


def p_distance(p1,p2):
    return abs(p1[0]-p2[0])+abs(p1[1]-p2[1])+abs(p1[2]-p2[2])

def find_cluster_index(p, clus_arr):
    best_c = 0
    best_d = 3*255
    for i in range(len(clus_arr)):
        d = p_distance(p,clus_arr[i])
        if d < best_d:
            best_d = d
            best_c = i
        elif d == best_d and clus_arr[i][3] > clus_arr[best_c][3]:  
            best_c = i

    return best_c

def get_inital_representatives(pxls,k):
    pxls_sr = sorted(pxls, key=lambda x: x[3], reverse=True)
    pxls_sr = sorted(pxls_sr, key=lambda x: x[0]*x[0]+x[1]*x[1]+x[2]*x[2])

    p = len(pxls_sr)//k
    rps = []
    for i in range(k):
        rps.append(pxls_sr[p*i])

    return rps

def find_next_representatives(pxls, cens, cens_i):
    repr = []
    for i, c in enumerate(cens):
        best_d = 255*3
        best_p = -1
        for idx in cens_i[i]:
            d = p_distance(pxls[idx], c)
            if d < best_d:
                best_d = d
                best_p = idx
            elif d == best_d:
                if pxls[idx][3] > pxls[best_p][3]:
                    best_p = idx
        repr.append(pxls[best_p])
    return repr


# Can make this whole faster by using numpy, should consider upgrading
def main():
    pxls = []
    k = 8
    iter_lm = 10

    lines = []
    with open('./CI/2019_summer/image3.txt', 'r') as f:
        lines = f.readlines()

    for l in lines:
        ns = [atoi(x) for x in l.strip().split(' ')]
        for i in range(0,len(ns),3):
            pxls.append((ns[i],ns[i+1],ns[i+2],i//3))

    repr = get_inital_representatives(pxls,k)

    for i in range(iter_lm):
        cens = [(0,0,0) for _ in repr]
        cens_i = [list() for _ in repr]
        n_check = len(pxls)
        for px in pxls:
            c_i = find_cluster_index(px,repr)
            cens_i[c_i].append(px[3])
        for i in range(len(cens)):
            cens[i] = (0, 0, 0)
            for j in cens_i[i]:
                cens[i] = (cens[i][0]+pxls[j][0], cens[i][1]+pxls[j][1], cens[i][2]+pxls[j][2])
            n_check -= len(cens_i[i])
            cens[i] = (floor(cens[i][0]/len(cens_i[i])), floor(cens[i][1]/len(cens_i[i])), floor(cens[i][2]/len(cens_i[i])))
        assert n_check == 0
        repr = find_next_representatives(pxls, cens, cens_i)
    for i in range(len(repr)):
        if i in [2,4,6]:
            print(f"p(i={i}): {repr[i]}")

if __name__ == "__main__":
    main()
```

### (6)
#### tomfluff's solution

```python
import numpy as np
from locale import atoi

WHITE = (255,255,255)

def p_distance(p1,p2):
    return abs(p1[0]-p2[0])+abs(p1[1]-p2[1])+abs(p1[2]-p2[2])

def find_cluster_index(p, clus_arr):
    best_c = 0
    best_d = 3*255
    for i in range(len(clus_arr)):
        d = p_distance(p,clus_arr[i])
        if d < best_d:
            best_d = d
            best_c = i
    
    return best_c

def get_inital_representatives(pxls,k):
    pxls.reverse()
    pxls_sr = sorted(pxls, key=lambda x: x[0]*x[0]+x[1]*x[1]+x[2]*x[2])
    pxls.reverse()

    p = len(pxls_sr)//k
    rps = []
    for i in range(k):
        rps.append(pxls_sr[p*i])
    
    return rps

def find_next_representatives(pxls, cens):
    repr = []
    for c in cens:
        best_d = 255*3
        best_p = -1
        for i in range(len(pxls)):
            d = p_distance(pxls[i],c)
            if d < best_d:
                best_d = d
                best_p = i
            elif d == best_d:
                if pxls[i][3] > pxls[best_p][3]:
                    best_p = i
        repr.append(pxls[best_p])
    return repr

def get_image_width(pxls, width_op):
    width = 0
    for w in width_op:
        b_is_width = True
        for i in range(w-1,len(pxls),w):
            if pxls[i][0:3] != WHITE:
                b_is_width = False
        if b_is_width:
            width = w
            break
    return width

def update_width_options(px, l, width_op):
    if px == WHITE:
        b_add = True
        for w in width_op:
            if l % w == 0:
                b_add = False
                break
        if b_add:
            width_op.append(l)

def LOGIT(msg):
    if True:
        print(f"LOG: {msg}")

def save_tif_image(fname, img, w, h):
    w3 = w&(2**8 -1)
    w2 = (w&(2**16 -1))>>8
    w1 = (w&(2**24 -1))>>16
    w0 = (w)>>24

    h3 = h&(2**8 -1)
    h2 = (h&(2**16 -1))>>8
    h1 = (h&(2**24 -1))>>16
    h0 = (h)>>24

    s = h*w*3
    s3 = s&(2**8 -1)
    s2 = (s&(2**16 -1))>>8
    s1 = (s&(2**24 -1))>>16
    s0 = (s)>>24
    
    hd_bytes = np.array([
        77,77,0,42,0,0,0,8,0,7,1,0,0,4,0,0,
        0,1,w0,w1,w2,w3,1,1,0,4,0,0,0,1,h0,h1,
        h2,h3,1,2,0,3,0,0,0,3,0,0,0,98,1,6,
        0,3,0,0,0,1,0,2,0,0,1,17,0,4,0,0,
        0,1,0,0,0,104,1,21,0,3,0,0,0,1,0,3,
        0,0,1,23,0,4,0,0,0,1,s0,s1,s2,s3,0,0,
        0,0,0,8,0,8,0,8], dtype='uint8')
    with open(fname, 'wb') as f:
        for b in hd_bytes:
            f.write(b)
        
        for i in range(img.shape[0]):
            for j in range(img.shape[1]):
                for k in range(img.shape[2]):
                    f.write(img[i,j,k])

# Can make this whole faster by using numpy, should consider upgrading
def main():
    pxls = []
    k = 16
    iter_lm = 10
    width_op = []

    lines = []
    with open('2019-Summer/image3.txt', 'r') as f:
        lines = f.readlines()
    LOGIT("Reading file...")
    for l in lines:
        ns = [atoi(x) for x in l.strip().split(' ')]
        for i in range(0,len(ns),3):
            pxls.append((ns[i],ns[i+1],ns[i+2],i//3))
            update_width_options(pxls[-1][0:3],len(pxls), width_op)
    
    width = get_image_width(pxls, width_op)
    LOGIT(f"Image width: {width}")
    
    repr = get_inital_representatives(pxls,k)
    LOGIT(f"Searching for representations...")

    for i in range(iter_lm+1):
        cens = [(0,0,0) for _ in repr]
        cens_i = [list() for _ in repr]
        n_check = len(pxls)
        for px in pxls:
            c_i = find_cluster_index(px,repr)
            cens_i[c_i].append(px[3])
        for i in range(len(cens)):
            for j in cens_i[i]:
                cens[i] = (cens[i][0]+pxls[j][0]/len(cens_i[i]), cens[i][1]+pxls[j][1]/len(cens_i[i]), cens[i][2]+pxls[j][2]/len(cens_i[i]))
            n_check -= len(cens_i[i])
        assert n_check == 0
        # find new reps
        repr = find_next_representatives(pxls, cens)
    LOGIT(f"Calculated representation for k={k}")

    new_img = np.full((len(pxls)//width,width,3),dtype='uint8',fill_value=0)
    for i in range(new_img.shape[0]):
        for j in range(new_img.shape[1]):
            p_i = find_cluster_index(pxls[i*width+j],repr)
            for k in range(new_img.shape[2]):
                new_img[i,j,k] = repr[p_i][k]

    save_tif_image('2019-Summer/image_.tif', new_img, new_img.shape[1], new_img.shape[0])


if __name__ == "__main__":
    main()
```

#### FunTotal's solution

C++ solution:

```c++
/*
这题意思就是利用上一题聚类，把颜色相近的用一个代表颜色替代后，就可以用尽可能少的颜色表示
同样的一张图片，并把那些替代后的像素元组写入image.tif按照题中的格式。所以第五题的代码得
写对，然后比较考察第六题的阅读理解，看懂怎么按照格式输出才使得图片能打得开。

一个比较无语的地方是，题面里说图片是squre，但是发现不是一个完全平方数，参考了楼上的py代码后
发现应该意思是矩形，然后根据第二问里面的白色像素的方法来判断长宽是1600 1250，然后直接这样来
输出一下，打开图片发现确实是这样，再去考虑用第五题的聚类算法来压缩。实际测下来发现我的代码跑
得飞快，而且目测效果比楼上的py代码更好(因为他第五题的代码就是有bug的)
*/
#include <bits/stdc++.h>
#define int long long
#define tii tuple<int, int, int>
using namespace std;
struct Node {
    int a, b, c, val, id;
};
bool cmp(Node a, Node b) {
    if (a.val != b.val)
        return a.val < b.val;
    else
        return a.id > b.id;
}
int cal(int a, int b, int c) {
    return a * a + b * b + c * c;
}
int dis(Node a, Node b) {
    return abs(a.a - b.a) + abs(a.b - b.b) + abs(a.c - b.c);
}
void solve() {
    ifstream fin("E:/UTokyo_Entrance_Exam/CI/2019_summer/image2.txt", ios::in);
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2019_summer/image2.tif", ios::out | ios::binary);
    vector<tii> vec;
    int num1, num2, num3;
    vector<Node> vec2;
    int cnt = 0;
    while (fin >> num1 >> num2 >> num3) {
        vec.push_back({num1, num2, num3});
        vec2.push_back(Node{num1, num2, num3, cal(num1, num2, num3), cnt++});
    }
    sort(vec2.begin(), vec2.end(), cmp);
    int n = vec2.size(), k = 32;
    vector<Node> repre(k);  // k个代表元素
    vector<int> bel(n); // 记录每个像素的代表元素编号
    vector<int> is_repre(n);
    for (int i = 0; i < k; i++) {
        Node ei = vec2[n * i / k];
        repre[i] = ei;
        is_repre[ei.id] = 1;
    }
    for (int repeat = 1; repeat <= 10; repeat++) {
        vector<vector<Node>> group;
        group.resize(k);  // 开 k 个vector, 存每个group里面有哪些三元组
        for (int i = 0; i < k; i++)
            group[i].push_back(repre[i]);  // 先把代表元素放进去
        // 枚举三元组, 遍历找最近的聚类
        for (int i = 0; i < n; i++) {
            Node now = vec2[i];
            if (is_repre[now.id])
                continue;   // 去掉代表元素
            int i_bel = 0;  // 当前元素属于的聚类编号
            for (int j = 1; j < k; j++) {
                if (dis(now, repre[j]) < dis(now, repre[i_bel]) ||
                    dis(now, repre[j]) == dis(now, repre[i_bel]) &&
                        repre[j].id > repre[i_bel].id) {
                    // 距离更近或者距离相同编号更大
                    i_bel = j;
                }
            }
            group[i_bel].push_back(now);
        }
        // 重新算每个聚类里的代表元素
        for (int i = 0; i < k; i++) {
            Node centroid = Node{0, 0, 0, 0, 0};  // 每个聚类的重心
            for (auto [a, b, c, val, id] : group[i]) {
                centroid.a += a, centroid.b += b, centroid.c += c;
            }
            // c++整形默认向下整除, 也可以用浮点数再floor取整, 可能还得加个eps
            centroid.a /= group[i].size(), centroid.b /= group[i].size(),
                centroid.c /= group[i].size();
            // 找组里离重心最近的作为新的代表元素
            Node newrepre = repre[i];
            for (auto it : group[i]) {
                if (dis(it, centroid) < dis(newrepre, centroid) ||
                    dis(it, centroid) == dis(newrepre, centroid) &&
                        it.id > newrepre.id) {
                    newrepre = it;
                }
            }
            is_repre[repre[i].id] = 0;
            repre[i] = newrepre;
            is_repre[repre[i].id] = 1;
            for (auto it : group[i])
                bel[it.id] = newrepre.id;
        }
    }
    

    // 下面处理按照对应格式输出
    // 先求出图片的长宽，利用第二问的白色来判断
    int W = 1600, H = 1025, S = W * H * 3;
    int w[4], h[4], s[4];
    for (int i = 3; i >= 0; i--)
        w[i] = W & 255, W >>= 8;
    for (int i = 3; i >= 0; i--)
        h[i] = H & 255, H >>= 8;
    for (int i = 3; i >= 0; i--)
        s[i] = S & 255, S >>= 8;
    vector<int> tp = {77, 77, 0,  42, 0,  0,  0,  8, 0,  7,   1, 0,  0, 4, 0,
                      0,  0,  1,  w[0], w[1], w[2], w[3], 1, 1,  0,   4, 0,  0, 0, 1,
                      h[0], h[1], h[2], h[3], 1,  2,  0,  3, 0,  0,   0, 3,  0, 0, 0,
                      98, 1,  6,  0,  3,  0,  0,  0, 1,  0,   2, 0,  0, 1, 17,
                      0,  4,  0,  0,  0,  1,  0,  0, 0,  104, 1, 21, 0, 3, 0,
                      0,  0,  1,  0,  3,  0,  0,  1, 23, 0,   4, 0,  0, 0, 1,
                      s[0], s[1], s[2], s[3], 0,  0,  0,  0, 0,  8,   0, 8,  0, 8};
    for (auto it : tp) {
        char ch = it;
        fout.write((char*)&ch, sizeof(ch));
    }
    for (int i = 0; i < n; i++) {
        auto [r, g, b] = vec[bel[i]];
        char chr = r, chg = g, chb = b;
        fout.write((char*)&chr, sizeof chr);
        fout.write((char*)&chg, sizeof chg);
        fout.write((char*)&chb, sizeof chb);
    }
}
signed main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```