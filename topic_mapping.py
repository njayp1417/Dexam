# MAT201 Complete Solution Mapping

# Topic assignments based on question analysis
topic_assignments = {
    # Topic 1: Implicit Differentiation (topicId: 1)
    1: (1, "detailed"),  # Full solution
    2: (1, "generic"),
    3: (1, "generic"),
    94: (1, "generic"),
    110: (1, "generic"),
    135: (1, "generic"),
    
    # Topic 2: Partial Derivatives (topicId: 2)
    5: (2, "detailed"),  # Full solution
    6: (2, "generic"),
    65: (2, "generic"),
    66: (2, "generic"),
    67: (2, "generic"),
    68: (2, "generic"),
    69: (2, "generic"),
    70: (2, "generic"),
    71: (2, "generic"),
    72: (2, "generic"),
    73: (2, "generic"),
    74: (2, "generic"),
    75: (2, "generic"),
    76: (2, "generic"),
    77: (2, "generic"),
    88: (2, "generic"),
    89: (2, "generic"),
    102: (2, "generic"),
    136: (2, "generic"),
    
    # Topic 3: Homogeneous Functions (topicId: 3)
    7: (3, "detailed"),
    8: (3, "generic"),
    
    # Topic 4: Taylor & Maclaurin Series (topicId: 4)
    9: (4, "generic"),
    10: (4, "generic"),
    11: (4, "generic"),
    12: (4, "generic"),
    13: (4, "generic"),
    14: (4, "generic"),
    15: (4, "generic"),
    16: (4, "generic"),
    17: (4, "generic"),
    18: (4, "generic"),
    19: (4, "generic"),
    53: (4, "detailed"),  # Full solution
    54: (4, "generic"),
    55: (4, "generic"),
    56: (4, "generic"),
    
    # Topic 5: Optimization (topicId: 5)
    20: (5, "detailed"),  # Full solution
    21: (5, "generic"),
    22: (5, "generic"),
    23: (5, "generic"),
    24: (5, "generic"),
    25: (5, "generic"),
    91: (5, "generic"),
    92: (5, "generic"),
    93: (5, "generic"),
    103: (5, "generic"),
    111: (5, "generic"),
    112: (5, "generic"),
    113: (5, "generic"),
    114: (5, "generic"),
    117: (5, "generic"),
    120: (5, "generic"),
    128: (5, "generic"),
    129: (5, "generic"),
    130: (5, "generic"),
    131: (5, "generic"),
    132: (5, "generic"),
    134: (5, "generic"),
    146: (5, "generic"),
    147: (5, "generic"),
    
    # Topic 6: Integration (topicId: 6)
    26: (6, "detailed"),  # Full solution
    32: (6, "generic"),
    33: (6, "generic"),
    95: (6, "generic"),
    96: (6, "generic"),
    97: (6, "generic"),
    98: (6, "generic"),
    141: (6, "generic"),
    
    # Topic 7: Volumes & Surface Area (topicId: 7)
    27: (7, "generic"),
    28: (7, "detailed"),  # Full solution
    29: (7, "generic"),
    30: (7, "generic"),
    137: (7, "generic"),
    
    # Topic 8: Double Integrals (topicId: 8)
    31: (8, "detailed"),  # Full solution
    37: (8, "generic"),
    138: (8, "generic"),
    
    # Topic 9: Limits & Continuity (topicId: 9)
    34: (9, "generic"),
    57: (9, "detailed"),  # Full solution
    58: (9, "generic"),
    59: (9, "generic"),
    60: (9, "generic"),
    61: (9, "generic"),
    62: (9, "generic"),
    63: (9, "generic"),
    64: (9, "generic"),
    116: (9, "generic"),
    140: (9, "generic"),
    150: (9, "generic"),
    
    # Topic 10: Higher Order Derivatives (topicId: 10)
    38: (10, "generic"),
    39: (10, "generic"),
    40: (10, "detailed"),  # Full solution
    41: (10, "generic"),
    42: (10, "generic"),
    43: (10, "generic"),
    44: (10, "generic"),
    45: (10, "generic"),
    46: (10, "generic"),
    47: (10, "generic"),
    87: (10, "generic"),
    90: (10, "generic"),
    106: (10, "generic"),
    107: (10, "generic"),
    108: (10, "generic"),
    109: (10, "generic"),
    115: (10, "generic"),
    118: (10, "generic"),
    121: (10, "generic"),
    139: (10, "generic"),
    142: (10, "generic"),
    143: (10, "generic"),
    144: (10, "generic"),
    148: (10, "generic"),
    
    # Topic 11: Mean Value Theorem (topicId: 11)
    48: (11, "detailed"),  # Full solution
    49: (11, "generic"),
    50: (11, "generic"),
    51: (11, "generic"),
    52: (11, "generic"),
    133: (11, "generic"),
    145: (11, "generic"),
    149: (11, "generic"),
    
    # Topic 12: Related Rates (topicId: 12)
    78: (12, "generic"),
    79: (12, "generic"),
    80: (12, "detailed"),  # Full solution
    81: (12, "generic"),
    82: (12, "generic"),
    83: (12, "generic"),
    84: (12, "generic"),
    85: (12, "generic"),
    86: (12, "generic"),
    119: (12, "generic"),
    122: (12, "generic"),
    123: (12, "generic"),
    127: (12, "generic"),
}

# Add remaining questions (4, 35, 36, 99-101, 104-105, 124-126)
# These are miscellaneous - assign to closest topic
misc_assignments = {
    4: (1, "generic"),  # Second derivative - related to differentiation
    35: (9, "generic"),  # Differentiability - related to continuity
    36: (6, "generic"),  # Line integral - integration
    99: (6, "generic"),  # Line integral
    100: (6, "generic"),  # Line integral
    101: (6, "generic"),  # Line integral
    104: (2, "generic"),  # Tangent plane - partial derivatives
    105: (9, "generic"),  # Approximation - limits
    124: (5, "generic"),  # Increasing intervals - optimization
    125: (5, "generic"),  # Concavity - optimization
    126: (9, "generic"),  # Linear approximation - limits
}

topic_assignments.update(misc_assignments)

print(f"Total questions mapped: {len(topic_assignments)}")
print(f"Should be 150: {len(topic_assignments) == 150}")

# Verify all questions 1-150 are covered
missing = [i for i in range(1, 151) if i not in topic_assignments]
print(f"Missing questions: {missing}")
