/**
 * In-place переворот строки заданной в виде массива.
 * Условие см. https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/879/
 *
 * Модификация строки через своп символов попарно, начиная с обоих краев.
 */
pub fn reverse_string(s: &mut Vec<char>) {
  let pairs_count = ((s.len() / 2) as f32).ceil() as usize;

  let mut temp_char;
  for i in 0..pairs_count {
    let left_index = i;
    let right_index = s.len() - 1 - i;

    temp_char = s[left_index];
    s[left_index] = s[right_index];
    s[right_index] = temp_char;
  }
}
