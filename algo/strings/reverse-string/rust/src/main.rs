mod lib;

fn compare_vectors(input: Vec<char>, etalon: Vec<char>) -> bool {
  let mut is_equal: bool = true;

  if input.len() != etalon.len() {
    is_equal = false;
  } else {
    for i in 0..input.len() {
      if input[i] != etalon[i] {
        is_equal = false;
        break;
      }
    }
  }

  return is_equal;
}

fn main() {
  let mut input1: Vec<char> = vec!['h', 'e', 'l', 'l', 'o'];
  let mut input2: Vec<char> = vec!['H', 'a', 'n', 'n', 'a', 'h'];
  let result1: Vec<char> = vec!['o', 'l', 'l', 'e', 'h'];
  let result2: Vec<char> = vec!['h', 'a', 'n', 'n', 'a', 'H'];

  lib::reverse_string(&mut input1);
  lib::reverse_string(&mut input2);

  assert!(compare_vectors(input1, result1));
  assert!(compare_vectors(input2, result2));
}
