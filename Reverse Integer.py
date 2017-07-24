class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        num_str = str(x)
        str_len = len(num_str)
        reverse_num_str = ''
        if x >= 0:
            for i in range(str_len):      
                reverse_num_str += num_str[str_len - i - 1]
        else:
            reverse_num_str += '-'
            for i in range(str_len):
                if i is not str_len - 1:
                    reverse_num_str += num_str[str_len - i - 1]
        reverse_num = int(reverse_num_str)
        return reverse_num if reverse_num < 2147483648 and reverse_num >= -2147483648 else 0