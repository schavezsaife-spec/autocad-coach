// ─── Lesson data ──────────────────────────────────────────────────────────────
const lessons = [
  {
    id: 1, title: 'Interface + Navigation', level: 'Day 1', xp: 10, tag: 'Beginner',
    description: 'Learn the workspace, command line, zoom, and pan so AutoCAD feels less intimidating.',
    objective: 'Get comfortable moving around AutoCAD without getting lost.',
    steps: [
      { text: 'Find the command line at the bottom of AutoCAD.', image: 'lesson_nav_workspace.svg', beforeLabel: 'Workspace layout', afterLabel: 'Command line highlighted', mistakeLabel: 'Beginners often miss the command line because they only look inside the drawing area.' },
      { text: 'Type LINE and press Enter just to practice using commands.', image: 'lesson_nav_workspace.svg', beforeLabel: 'Command line ready', afterLabel: 'LINE command entered', mistakeLabel: 'If nothing happens, click inside AutoCAD first so the command line is active.' },
      { text: 'Use the mouse wheel to zoom in and out.', image: 'lesson_nav_workspace.svg', beforeLabel: 'Full drawing view', afterLabel: 'Closer zoom level', mistakeLabel: 'Zooming too far can make it feel like the drawing disappeared.' },
      { text: 'Hold the mouse wheel to pan around the screen.', image: 'lesson_nav_workspace.svg', beforeLabel: 'Current view', afterLabel: 'Moved view', mistakeLabel: 'Panning only works while the wheel is held down.' }
    ],
    tryThis: 'Use Z then A to zoom to all objects.',
    commonMistake: 'New learners often think the drawing is gone when they are only zoomed far away.'
  },
  {
    id: 2, title: 'LINE + CIRCLE', level: 'Day 2', xp: 15, tag: 'Core Skill',
    description: 'Draw your first shapes and start controlling your sketch with confidence.',
    objective: 'Create basic geometry using two of the most common beginner commands.',
    steps: [
      { text: 'Type LINE and press Enter.', image: 'lesson_line_circle.svg', beforeLabel: 'No geometry yet', afterLabel: 'LINE command started', mistakeLabel: 'Start with one simple segment instead of trying to draw the whole sketch at once.' },
      { text: 'Click a starting point and then a second point.', image: 'lesson_line_circle.svg', beforeLabel: 'Choose point one', afterLabel: 'First segment created', mistakeLabel: 'If the line lands in the wrong place, undo and click more carefully.' },
      { text: 'Press Enter to end the line command.', image: 'lesson_line_circle.svg', beforeLabel: 'Line still active', afterLabel: 'Line command finished', mistakeLabel: 'Many beginners forget to press Enter, so AutoCAD keeps waiting for another point.' },
      { text: 'Type CIRCLE, click the center, and drag out the radius.', image: 'lesson_line_circle.svg', beforeLabel: 'Center point selected', afterLabel: 'Circle with radius', mistakeLabel: 'Click the center first, then drag outward for size.' }
    ],
    tryThis: 'Draw a square using four lines and place a circle inside it.',
    commonMistake: 'Beginners often forget to finish the command with Enter.'
  },
  {
    id: 3, title: 'TRIM', level: 'Day 3', xp: 20, tag: 'Editing',
    description: 'Clean up drawings by removing extra line segments.',
    objective: 'Learn how to remove unwanted pieces instead of redrawing everything.',
    steps: [
      { text: 'Start with intersecting lines that have extra pieces sticking out.', image: 'trim_before.png', beforeLabel: 'Before trimming', afterLabel: 'Extra geometry still visible', mistakeLabel: 'TRIM will not work if the edges do not actually touch.' },
      { text: 'Click the segment you want to remove with TRIM.', image: 'trim_action.png', beforeLabel: 'Boundary chosen', afterLabel: 'Click the piece to remove', mistakeLabel: 'Choose the cutting edges first, then remove the extra segment.' },
      { text: 'The extra line segment disappears and the drawing looks clean.', image: 'trim_after.png', beforeLabel: 'Messy intersection', afterLabel: 'Clean trimmed result', mistakeLabel: 'Lines must intersect for TRIM to work.' }
    ],
    tryThis: 'Draw two crossing lines and trim one segment away.',
    commonMistake: 'TRIM usually fails when lines do not really cross or touch.'
  },
  {
    id: 4, title: 'MOVE + COPY', level: 'Day 4', xp: 15, tag: 'Efficiency',
    description: 'Work faster by reusing shapes instead of redrawing everything.',
    objective: 'Reposition and duplicate shapes with control.',
    steps: [
      { text: 'Select an object.', image: 'lesson_move_copy.svg', beforeLabel: 'Original object', afterLabel: 'Object selected', mistakeLabel: 'Nothing will move or copy if the object is not selected first.' },
      { text: 'Type MOVE and press Enter.', image: 'lesson_move_copy.svg', beforeLabel: 'Object selected', afterLabel: 'Move command active', mistakeLabel: 'The command starts only after the object is selected.' },
      { text: 'Pick a base point, then click the new location.', image: 'lesson_move_copy.svg', beforeLabel: 'Base point on original object', afterLabel: 'Object moved to a new position', mistakeLabel: 'A poor base point makes placement feel random.' },
      { text: 'Type COPY and repeat the same idea to make duplicates.', image: 'lesson_move_copy.svg', beforeLabel: 'Original object stays in place', afterLabel: 'Duplicate object appears', mistakeLabel: 'COPY creates a second object, while MOVE relocates the original.' }
    ],
    tryThis: 'Draw one circle, then copy it three times in a row.',
    commonMistake: 'Picking the wrong base point makes the object land in the wrong place.'
  },
  {
    id: 5, title: 'Precision with OSNAP', level: 'Day 5', xp: 20, tag: 'Precision',
    description: 'Snap exactly to endpoints, midpoints, and centers for clean technical drawings.',
    objective: 'Stop guessing and start drawing accurately.',
    steps: [
      { text: 'Turn on Object Snap at the bottom of the screen.', image: 'lesson_osnap_precision.svg', beforeLabel: 'Snaps off', afterLabel: 'Snaps ready', mistakeLabel: 'If OSNAP is off, AutoCAD will not guide you to precise points.' },
      { text: 'Hover near an endpoint, midpoint, or center until the snap marker appears.', image: 'lesson_osnap_precision.svg', beforeLabel: 'Cursor near geometry', afterLabel: 'Snap marker found', mistakeLabel: 'Move slowly near the target point so the marker has time to appear.' },
      { text: 'Click only when the correct snap point appears.', image: 'lesson_osnap_precision.svg', beforeLabel: 'Possible target points', afterLabel: 'Exact point selected', mistakeLabel: 'Clicking too early usually places the point slightly off target.' },
      { text: 'Use these snaps while drawing lines or circles.', image: 'lesson_osnap_precision.svg', beforeLabel: 'Guessed geometry', afterLabel: 'Clean connected geometry', mistakeLabel: 'Tiny gaps later cause commands like JOIN to fail.' }
    ],
    tryThis: 'Draw a line from a midpoint to the center of a circle.',
    commonMistake: 'If the snap marker never appears, OSNAP may be turned off.'
  },
  {
    id: 6, title: 'Layers Basics', level: 'Day 6', xp: 20, tag: 'Organization',
    description: 'Keep drawings readable by separating objects onto layers.',
    objective: 'Understand how layers organize technical drawings.',
    steps: [
      { text: 'Open the Layer Properties panel.', image: 'lesson_layers_panel.svg', beforeLabel: 'Single mixed drawing', afterLabel: 'Layer manager visible', mistakeLabel: 'Beginners often draw everything on one layer and lose control fast.' },
      { text: 'Make a new layer for a different object type.', image: 'lesson_layers_panel.svg', beforeLabel: 'Only layer 0', afterLabel: 'New layer added', mistakeLabel: 'Use clear names so you remember what each layer is for.' },
      { text: 'Set the new layer current before drawing.', image: 'lesson_layers_panel.svg', beforeLabel: 'Old layer active', afterLabel: 'New layer active', mistakeLabel: 'If the wrong layer is current, the new geometry lands in the wrong place.' },
      { text: 'Use color differences to make the drawing easier to read.', image: 'lesson_layers_panel.svg', beforeLabel: 'Everything looks the same', afterLabel: 'Objects grouped visually', mistakeLabel: 'Do not rely only on memory to track object types.' }
    ],
    tryThis: 'Create one layer for outlines and another for dimensions.',
    commonMistake: 'Drawing everything on one layer makes edits much harder later.'
  },
  {
    id: 7, title: 'Dimensions + Text', level: 'Day 7', xp: 20, tag: 'Documentation',
    description: 'Add readable measurements and labels to your sketches.',
    objective: 'Communicate size and meaning clearly on a drawing.',
    steps: [
      { text: 'Use a dimension command on a clean edge.', image: 'lesson_dimensions_text.svg', beforeLabel: 'Undimensioned shape', afterLabel: 'Measurement visible', mistakeLabel: 'Crowded drawings make dimensions hard to read.' },
      { text: 'Place the dimension where it does not overlap the object.', image: 'lesson_dimensions_text.svg', beforeLabel: 'Dimension too close', afterLabel: 'Dimension readable', mistakeLabel: 'Leave enough space so the number is not cramped.' },
      { text: 'Add simple text labels for key parts.', image: 'lesson_dimensions_text.svg', beforeLabel: 'No label', afterLabel: 'Part label added', mistakeLabel: 'Keep text brief and consistent.' },
      { text: 'Review the drawing from a reader point of view.', image: 'lesson_dimensions_text.svg', beforeLabel: 'Only the author understands it', afterLabel: 'Another person can read it', mistakeLabel: 'Good documentation is part of the drawing, not extra decoration.' }
    ],
    tryThis: 'Dimension the width of a rectangle and add a part name above it.',
    commonMistake: 'Dimensions become messy when they overlap lines and geometry.'
  },
  {
    id: 8, title: 'HATCH', level: 'Day 8', xp: 20, tag: 'Drafting',
    description: 'Fill closed areas to show sections, materials, or emphasis.',
    objective: 'Understand how hatch patterns improve drawing communication.',
    steps: [
      { text: 'Select a closed boundary.', image: 'lesson_hatch_fill.svg', beforeLabel: 'Closed region ready', afterLabel: 'Hatch target chosen', mistakeLabel: 'HATCH needs a closed area to work properly.' },
      { text: 'Apply a hatch pattern to the selected region.', image: 'lesson_hatch_fill.svg', beforeLabel: 'Plain region', afterLabel: 'Pattern added', mistakeLabel: 'If the area does not fill, there may be a tiny gap in the outline.' },
      { text: 'Adjust the pattern so it stays readable.', image: 'lesson_hatch_fill.svg', beforeLabel: 'Pattern too dense', afterLabel: 'Pattern readable', mistakeLabel: 'Too much hatch detail can overwhelm a beginner drawing.' },
      { text: 'Use hatch to separate parts of the drawing clearly.', image: 'lesson_hatch_fill.svg', beforeLabel: 'Regions blend together', afterLabel: 'Regions easier to understand', mistakeLabel: 'Use hatch intentionally, not everywhere.' }
    ],
    tryThis: 'Create a closed rectangle and apply a hatch pattern to it.',
    commonMistake: 'Small gaps in the outline stop HATCH from filling correctly.'
  },
  {
    id: 9, title: 'BLOCKS', level: 'Day 9', xp: 22, tag: 'Reuse',
    description: 'Save repeated geometry as reusable symbols instead of redrawing it.',
    objective: 'Learn how blocks speed up repeatable drafting work.',
    steps: [
      { text: 'Create one clean object that you want to reuse.', image: 'lesson_blocks_reuse.svg', beforeLabel: 'Single symbol', afterLabel: 'Reusable source ready', mistakeLabel: 'Clean up the original shape before making the block.' },
      { text: 'Turn that object into a block.', image: 'lesson_blocks_reuse.svg', beforeLabel: 'Regular object', afterLabel: 'Block created', mistakeLabel: 'Name the block clearly so it is easy to find later.' },
      { text: 'Insert the block where you need it.', image: 'lesson_blocks_reuse.svg', beforeLabel: 'One instance only', afterLabel: 'Multiple inserts placed', mistakeLabel: 'Blocks help when the same shape appears again and again.' },
      { text: 'Use blocks to keep repeated elements consistent.', image: 'lesson_blocks_reuse.svg', beforeLabel: 'Repeated redraws', afterLabel: 'Consistent repeated symbols', mistakeLabel: 'Redrawing repeated objects invites mistakes.' }
    ],
    tryThis: 'Turn a simple symbol into a block and insert it twice.',
    commonMistake: 'New users forget that blocks are meant to save time on repeated objects.'
  },
  {
    id: 10, title: 'JOIN', level: 'Day 10', xp: 20, tag: 'Editing',
    description: 'Combine multiple lines into one object.',
    objective: 'Make separate lines behave like one connected shape.',
    steps: [
      { text: 'Start with separate lines that form a shape.', image: 'join_before.png', beforeLabel: 'Separate lines', afterLabel: 'Geometry ready to combine', mistakeLabel: 'The endpoints must really touch.' },
      { text: 'Use JOIN so the lines become one object.', image: 'join_after.png', beforeLabel: 'Separate pieces selected', afterLabel: 'Now the shape is one object', mistakeLabel: 'Tiny endpoint gaps cause JOIN to fail.' }
    ],
    tryThis: 'Draw a rectangle from four lines, then join them.',
    commonMistake: 'Lines must touch exactly or JOIN will fail.'
  },
  {
    id: 11, title: 'EXTRUDE', level: 'Day 11', xp: 25, tag: '3D',
    description: 'Turn a flat 2D sketch into a simple 3D object.',
    objective: 'Understand how a closed shape becomes a 3D solid.',
    steps: [
      { text: 'Start with a closed 2D shape like a rectangle.', image: 'extrude_before.png', beforeLabel: '2D shape', afterLabel: 'Closed profile ready', mistakeLabel: 'The outline must be closed first.' },
      { text: 'Use EXTRUDE and pull the shape upward.', image: 'extrude_action.png', beforeLabel: 'Flat profile selected', afterLabel: 'Height being added', mistakeLabel: 'Open outlines usually break 3D commands.' },
      { text: 'You now have a 3D object instead of a flat outline.', image: 'extrude_after.png', beforeLabel: 'Flat sketch', afterLabel: '3D result', mistakeLabel: 'If EXTRUDE fails, inspect the shape for gaps.' }
    ],
    tryThis: 'Draw a rectangle and turn it into a box shape.',
    commonMistake: 'If the shape is not closed, 3D commands often fail.'
  },
  {
    id: 12, title: 'POLYLINE + RECTANGLE', level: 'Day 12', xp: 20, tag: 'Drafting Flow',
    description: 'Create connected outlines faster by using closed shapes and single connected paths.',
    objective: 'Build cleaner profiles that are easier to edit later.',
    steps: [
      { text: 'Use RECTANGLE when you need a fast closed shape.', image: 'lesson_polyline_rectangle.svg', beforeLabel: 'Open sketch idea', afterLabel: 'Closed rectangle placed', mistakeLabel: 'Beginners often draw four separate lines when one command can create the full outline.' },
      { text: 'Use POLYLINE when you want multiple connected edges to stay together.', image: 'lesson_polyline_rectangle.svg', beforeLabel: 'Separate segments', afterLabel: 'Single connected path', mistakeLabel: 'If you switch between line segments too often, later edits become slower.' },
      { text: 'Mix straight segments into one continuous outline before ending the command.', image: 'lesson_polyline_rectangle.svg', beforeLabel: 'Polyline still active', afterLabel: 'Connected boundary complete', mistakeLabel: 'Pressing Enter too early breaks the outline into extra pieces.' },
      { text: 'Prefer closed profiles when the drawing may later be joined, hatched, or extruded.', image: 'lesson_polyline_rectangle.svg', beforeLabel: 'Loose outline', afterLabel: 'Closed profile ready', mistakeLabel: 'Open gaps create trouble for many follow-up commands.' }
    ],
    tryThis: 'Draw a simple plate outline with one rectangle and one added polyline extension.',
    commonMistake: 'Using too many separate lines creates cleanup work later.'
  },
  {
    id: 13, title: 'OFFSET + MIRROR', level: 'Day 13', xp: 22, tag: 'Efficiency',
    description: 'Speed up drafting by creating parallel geometry and balanced symmetrical copies.',
    objective: 'Reuse shapes without manually redrawing repeated edges.',
    steps: [
      { text: 'Use OFFSET to create a parallel copy at a fixed distance.', image: 'lesson_offset_mirror.svg', beforeLabel: 'One original edge', afterLabel: 'Parallel geometry created', mistakeLabel: 'The offset distance must be entered before you click the new side.' },
      { text: 'Choose the correct side of the source object for the new copy.', image: 'lesson_offset_mirror.svg', beforeLabel: 'Source geometry selected', afterLabel: 'Offset lands on intended side', mistakeLabel: 'Clicking the wrong side places the offset inside instead of outside.' },
      { text: 'Use MIRROR when a drawing has a centerline or obvious symmetry.', image: 'lesson_offset_mirror.svg', beforeLabel: 'One half drafted', afterLabel: 'Mirrored result built', mistakeLabel: 'The mirror line should be placed carefully or the copy will shift.' },
      { text: 'Keep one half clean before mirroring so both sides stay consistent.', image: 'lesson_offset_mirror.svg', beforeLabel: 'Half-profile prepared', afterLabel: 'Balanced full profile', mistakeLabel: 'Mirroring messy geometry doubles the cleanup work.' }
    ],
    tryThis: 'Draw half of a bracket, then mirror it across a vertical centerline.',
    commonMistake: 'Using mirror before the source side is cleaned up creates duplicate mistakes.'
  },
  {
    id: 14, title: 'FILLET + CHAMFER', level: 'Day 14', xp: 22, tag: 'Detailing',
    description: 'Round or bevel corners so technical parts look intentional and easier to manufacture.',
    objective: 'Understand when to smooth a corner and when to cut a flat edge.',
    steps: [
      { text: 'Use FILLET to replace a sharp corner with a rounded arc.', image: 'lesson_fillet_chamfer.svg', beforeLabel: 'Sharp intersection', afterLabel: 'Rounded corner added', mistakeLabel: 'If the radius is too large, the arc may not fit the geometry you selected.' },
      { text: 'Set the fillet radius before choosing the two edges.', image: 'lesson_fillet_chamfer.svg', beforeLabel: 'Default settings', afterLabel: 'Radius controlled', mistakeLabel: 'Beginners often forget the current fillet radius stays active from earlier work.' },
      { text: 'Use CHAMFER when you want a straight angled cut instead of a round corner.', image: 'lesson_fillet_chamfer.svg', beforeLabel: 'Sharp corner', afterLabel: 'Flat beveled edge', mistakeLabel: 'Chamfer distances must match the look you want before selecting the edges.' },
      { text: 'Compare rounded and beveled corners to choose the right finish for the drawing.', image: 'lesson_fillet_chamfer.svg', beforeLabel: 'Undecided corner style', afterLabel: 'Intentional detail choice', mistakeLabel: 'Not every corner should be treated the same way.' }
    ],
    tryThis: 'Apply a small fillet to one corner of a plate and a chamfer to another.',
    commonMistake: 'Leaving the wrong radius or distance active gives surprising corner results.'
  },
  {
    id: 15, title: 'ARRAY + Dimensions Review', level: 'Day 15', xp: 24, tag: 'Production',
    description: 'Repeat features quickly and confirm spacing with dimensions so layouts stay consistent.',
    objective: 'Move from one-off geometry to repeatable design patterns.',
    steps: [
      { text: 'Use a rectangular array to repeat the same feature in even rows or columns.', image: 'lesson_array_dimensions.svg', beforeLabel: 'Single source object', afterLabel: 'Even repeated pattern', mistakeLabel: 'If spacing is guessed instead of set, the repeated layout may drift.' },
      { text: 'Use a polar array when features should repeat around a center point.', image: 'lesson_array_dimensions.svg', beforeLabel: 'One radial feature', afterLabel: 'Circular pattern created', mistakeLabel: 'The center point must be chosen carefully or the array rotates around the wrong location.' },
      { text: 'Dimension the spacing after the array is created to confirm the layout is readable.', image: 'lesson_array_dimensions.svg', beforeLabel: 'Pattern only', afterLabel: 'Pattern with measured spacing', mistakeLabel: 'A repeated pattern still needs documentation if another person must understand it.' },
      { text: 'Use arrays for holes, slots, fasteners, and other repeated drafting details.', image: 'lesson_array_dimensions.svg', beforeLabel: 'Manual repetition', afterLabel: 'Faster repeat workflow', mistakeLabel: 'Redrawing repeated objects by hand wastes time and reduces consistency.' }
    ],
    tryThis: 'Create one hole and use an array to place matching holes across a plate.',
    commonMistake: 'Failing to dimension repeated spacing makes the pattern harder to trust.'
  }
];

// ─── Project data ──────────────────────────────────────────────────────────────
const projects = [
  {
    title: 'Starter Keychain', difficulty: 'Easy', time: '20 min',
    description: 'Use line, circle, trim, and text to design a simple custom keychain.',
    skills: ['LINE', 'CIRCLE', 'TRIM', 'TEXT'],
    steps: [
      { text: 'Draw the outer shape.', image: 'project_starter_keychain.svg', caption: 'Start with the tag outline so the rest of the project has a clear boundary.' },
      { text: 'Add a small hole circle.', image: 'project_starter_keychain.svg', caption: 'Place the circle near one end so the keyring hole has room around it.' },
      { text: 'Trim extra edges.', image: 'project_starter_keychain.svg', caption: 'Clean up overlaps so the keychain shape reads as one neat profile.' },
      { text: 'Add initials or a label.', image: 'project_starter_keychain.svg', caption: 'Finish with simple text to personalize the beginner project.' }
    ]
  },
  {
    title: 'Wheel Sketch', difficulty: 'Easy', time: '25 min',
    description: 'Practice circles, symmetry, and cleanup tools with a fun geometric build.',
    skills: ['CIRCLE', 'OFFSET', 'TRIM'],
    steps: [
      { text: 'Draw the main circles.', image: 'project_wheel_sketch.svg', caption: 'Begin with the largest outer wheel circle and add inner circles from the same center.' },
      { text: 'Offset inner rings.', image: 'project_wheel_sketch.svg', caption: 'Use OFFSET to create evenly spaced rings without redrawing them.' },
      { text: 'Sketch spoke shapes.', image: 'project_wheel_sketch.svg', caption: 'Build spoke geometry symmetrically so the wheel stays balanced.' },
      { text: 'Trim the extra geometry.', image: 'project_wheel_sketch.svg', caption: 'Remove extra lines so the final wheel reads clearly.' }
    ]
  },
  {
    title: 'Phone Stand', difficulty: 'Medium', time: '35 min',
    description: 'Sketch a simple object and start thinking like a product designer.',
    skills: ['LINE', 'OFFSET', 'DIMENSIONS'],
    steps: [
      { text: 'Create the side profile.', image: 'project_phone_stand.svg', caption: 'Block in the main side shape first so the stand has a clear silhouette.' },
      { text: 'Offset thickness.', image: 'project_phone_stand.svg', caption: 'Apply OFFSET to give the profile realistic material thickness.' },
      { text: 'Add the slot opening.', image: 'project_phone_stand.svg', caption: 'Cut in the support slot where the phone will rest.' },
      { text: 'Dimension the shape.', image: 'project_phone_stand.svg', caption: 'Label key measurements so the design feels more engineering-focused.' }
    ]
  },
  {
    title: 'Car Outline', difficulty: 'Medium', time: '40 min',
    description: 'Build a clean 2D profile while practicing curves, editing, and proportion.',
    skills: ['LINE', 'ARC', 'TRIM'],
    steps: [
      { text: 'Sketch the body outline.', image: 'project_car_outline.svg', caption: 'Lay out the long body line first so the car proportions have a base.' },
      { text: 'Add the roof arc.', image: 'project_car_outline.svg', caption: 'Use a clean arc to give the profile a believable roof shape.' },
      { text: 'Shape wheel wells.', image: 'project_car_outline.svg', caption: 'Cut in the front and rear wheel areas with smooth curves.' },
      { text: 'Trim and clean up the outline.', image: 'project_car_outline.svg', caption: 'Remove overlaps and sharpen the final silhouette.' }
    ]
  },
  {
    title: 'Room Layout', difficulty: 'Medium', time: '45 min',
    description: 'Draft a beginner floor-plan style room using walls, door openings, windows, and furniture blocks.',
    skills: ['RECTANGLE', 'OFFSET', 'TRIM', 'BLOCKS'],
    steps: [
      { text: 'Lay out the outer room boundary as a clear closed shape.', image: 'project_room_layout.svg', caption: 'Start with the full room footprint so all wall offsets have a clean base.' },
      { text: 'Offset interior walls to create wall thickness.', image: 'project_room_layout.svg', caption: 'Use one consistent offset value so the floor plan feels believable.' },
      { text: 'Trim openings for a door and windows.', image: 'project_room_layout.svg', caption: 'Cut openings cleanly so the wall layout reads like a real plan.' },
      { text: 'Place simple furniture blocks to test the layout.', image: 'project_room_layout.svg', caption: 'Add a few scaled objects so the room feels practical and easier to read.' }
    ]
  },
  {
    title: 'Bracket Plate', difficulty: 'Medium', time: '50 min',
    description: 'Create a simple mechanical bracket with hole spacing, corner treatments, and dimensions.',
    skills: ['POLYLINE', 'OFFSET', 'FILLET', 'CHAMFER', 'DIMENSIONS'],
    steps: [
      { text: 'Sketch the main bracket outline as one connected profile.', image: 'project_bracket_plate.svg', caption: 'A connected outline is easier to adjust before you add holes and details.' },
      { text: 'Place two repeated mounting holes with measured spacing.', image: 'project_bracket_plate.svg', caption: 'Hole placement should feel controlled and symmetrical, not guessed.' },
      { text: 'Add a chamfered or rounded corner to show design intent.', image: 'project_bracket_plate.svg', caption: 'Use one detail change so the bracket feels like a real manufactured part.' },
      { text: 'Dimension the part width and height to finish the drawing clearly.', image: 'project_bracket_plate.svg', caption: 'The final dimensions turn the sketch into something another person could interpret.' }
    ]
  }
];

// ─── Quiz data ─────────────────────────────────────────────────────────────────
const quizQuestions = [
  { question: 'Which command creates a parallel copy of a line?', answers: ['Trim', 'Offset', 'Move'], correct: 'Offset', why: 'OFFSET creates a new object at a set distance from the original one.' },
  { question: 'What should you check first if JOIN says 0 items joined?', answers: ['Whether endpoints are touching', 'Whether the file is saved', 'Whether the text size is too small'], correct: 'Whether endpoints are touching', why: 'JOIN only works when the geometry really connects.' },
  { question: 'What usually fixes the problem when EXTRUDE does not work?', answers: ['Change the font', 'Close the outline', 'Turn the layer blue'], correct: 'Close the outline', why: 'Most beginner EXTRUDE errors happen because the sketch is open rather than closed.' },
  { question: 'Why are layers helpful?', answers: ['They organize drawing parts', 'They make circles rounder', 'They replace commands'], correct: 'They organize drawing parts', why: 'Layers keep different object types easier to manage.' },
  { question: 'When is MIRROR most useful?', answers: ['When a design is symmetrical', 'When a line needs trimming', 'When text is too small'], correct: 'When a design is symmetrical', why: 'MIRROR saves time by copying geometry across a chosen axis.' },
  { question: 'What is a common use for ARRAY?', answers: ['Repeating holes or features evenly', 'Changing layer colors only', 'Saving the drawing file'], correct: 'Repeating holes or features evenly', why: 'ARRAY is meant for consistent repeated placement.' }
];

// ─── Diagnostic rules ──────────────────────────────────────────────────────────
// ─── Chat suggestions (replaces old tutorPrompts + diagnostic prompts) ────────
const chatSuggestions = [
  'Why is TRIM not working?',
  'JOIN says 0 items joined — how do I fix it?',
  'How do I turn my sketch into 3D?',
  'My drawing disappeared — where did it go?',
  'How do layers help my drawing?',
  'When should I use MIRROR instead of COPY?',
  'HATCH won\'t fill my region — why?',
  'How do I space holes evenly with ARRAY?',
];

const titles = { home: 'Home', dashboard: 'Dashboard', learn: 'Lessons', projects: 'Projects', quiz: 'Quiz', profile: 'Profile', stuck: 'Troubleshooting', chat: 'AI Chat' };

// ─── State ─────────────────────────────────────────────────────────────────────
const state = {
  completedLessons: [], completedProjects: [],
  selectedLessonId: 1, lessonStepIndex: 0,
  selectedProjectTitle: projects[0].title,
  activeTab: 'home',
  showVisuals: true, showProjectVisuals: true,
  streak: 0, quizAnswers: {},
  lightbox: { src: '', alt: '', caption: '', open: false },
  profile: { name: '', email: '', goal: '', loggedIn: false }
};

// Chat messages: session-only (not persisted — resets on page load intentionally)
let chatMessages = [];

// ─── State persistence ─────────────────────────────────────────────────────────
async function loadState() {
  const saved = await window.AutoCADCoachServices?.storage.readState();
  if (saved) Object.assign(state, saved);
}
// Fire-and-forget: write happens async in background — no await needed for UX
function saveState() { window.AutoCADCoachServices?.storage.writeState(state); }

// ─── Helpers ───────────────────────────────────────────────────────────────────
function getSelectedLesson()  { return lessons.find((l) => l.id === state.selectedLessonId) || lessons[0]; }
function getSelectedProject() { return projects.find((p) => p.title === state.selectedProjectTitle) || projects[0]; }

function resolveAssetPath(src) {
  if (!src) return '';
  const prefixed = src.startsWith('http') || src.startsWith('data:') || src.startsWith('/') || src.startsWith('img/')
    ? src : `img/${src}`;
  try { return new URL(prefixed, window.location.href).href; }
  catch { return prefixed; }
}

function openLightbox(src, alt, caption = '') {
  const resolvedSrc = resolveAssetPath(src);
  if (!resolvedSrc) return;
  state.lightbox = { src: resolvedSrc, alt, caption, open: true };
  document.getElementById('lightboxImage').src = resolvedSrc;
  document.getElementById('lightboxImage').alt = alt;
  document.getElementById('lightboxCaption').textContent = caption || alt;
  document.getElementById('lightbox').classList.remove('hidden');
}
function closeLightbox() {
  state.lightbox.open = false;
  document.getElementById('lightboxImage').removeAttribute('src');
  document.getElementById('lightbox').classList.add('hidden');
}

function getLessonStatus(lesson) {
  const completed  = state.completedLessons.includes(lesson.id);
  const unlocked   = lesson.id === 1 || completed || state.completedLessons.includes(lesson.id - 1);
  const prerequisite = lesson.id > 1 ? lessons.find((l) => l.id === lesson.id - 1) : null;
  return { completed, unlocked, prerequisite };
}
function getXp() {
  const lessonXp = lessons.filter((l) => state.completedLessons.includes(l.id)).reduce((s, l) => s + l.xp, 0);
  const quizXp   = Object.entries(state.quizAnswers).reduce((s, [i, a]) => quizQuestions[Number(i)]?.correct === a ? s + 5 : s, 0);
  return lessonXp + quizXp + state.completedProjects.length * 15;
}
function getProgress() {
  const total = lessons.length + projects.length;
  const done  = state.completedLessons.length + state.completedProjects.length;
  return Math.round((done / total) * 100);
}
function getNextLesson() { return lessons.find((l) => !state.completedLessons.includes(l.id)) || lessons[lessons.length - 1]; }

function setActiveTab(tabName) {
  state.activeTab = tabName;
  document.querySelectorAll('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.tabTarget === tabName));
  document.querySelectorAll('.tab-panel').forEach((p) => p.classList.toggle('active', p.id === `${tabName}Panel`));
  document.getElementById('workspaceTitle').textContent = titles[tabName] || 'Workspace';
  saveState();
}

// ─── Render: stats ─────────────────────────────────────────────────────────────
function renderStats() {
  const xp       = getXp();
  const progress = getProgress();
  const streak   = state.streak;

  // Sidebar
  document.getElementById('lessonsCompleteValue').textContent = `${state.completedLessons.length}/${lessons.length}`;
  document.getElementById('xpValue').textContent     = xp;
  document.getElementById('streakValue').textContent  = `${streak}d`;
  document.getElementById('progressValue').textContent = `${progress}%`;
  document.getElementById('progressBarFill').style.width = `${progress}%`;

  // Home panel stat cards
  const elH = (id) => document.getElementById(id);
  if (elH('homeLessonsVal'))  elH('homeLessonsVal').textContent  = `${state.completedLessons.length}/${lessons.length}`;
  if (elH('homeXpVal'))       elH('homeXpVal').textContent       = xp;
  if (elH('homeStreakVal'))    elH('homeStreakVal').textContent    = streak;
  if (elH('homeProgressVal')) elH('homeProgressVal').textContent = `${progress}%`;

  const next = getNextLesson();
  document.getElementById('nextLessonTitle').textContent       = next.title;
  document.getElementById('nextLessonDescription').textContent = next.description;
}

// ─── Render: dashboard ─────────────────────────────────────────────────────────
function renderDashboard(searchValue = '') {
  const query = searchValue.trim().toLowerCase();
  const visible = lessons.filter((l) => !query || [l.title, l.tag, l.description].some((s) => s.toLowerCase().includes(query)));
  document.getElementById('dashboardLessonGrid').innerHTML = visible.map((lesson) => {
    const status = getLessonStatus(lesson);
    const lockText = status.unlocked ? lesson.description : `Finish ${status.prerequisite?.level || 'the previous lesson'} first to unlock.`;
    return `<button class="dashboard-card" data-open-lesson="${lesson.id}" ${status.unlocked ? '' : 'disabled'}>
      <div class="list-btn-top"><span class="pill">${lesson.tag}</span><span class="status-badge ${status.completed ? 'done' : status.unlocked ? '' : 'locked'}">${status.completed ? 'Done' : status.unlocked ? `+${lesson.xp} XP` : 'Locked'}</span></div>
      <p class="eyebrow" style="margin-top:8px">${lesson.level}</p>
      <h4>${lesson.title}</h4>
      <p class="muted">${lockText}</p>
    </button>`;
  }).join('');
}

// ─── Render: lesson list ───────────────────────────────────────────────────────
function renderLessonList() {
  document.getElementById('lessonList').innerHTML = lessons.map((lesson) => {
    const status = getLessonStatus(lesson);
    const hint   = status.unlocked ? lesson.tag : `Finish ${status.prerequisite?.level || 'previous lesson'} first`;
    return `<button class="list-btn ${state.selectedLessonId === lesson.id ? 'active' : ''} ${status.unlocked ? '' : 'locked'}" data-select-lesson="${lesson.id}" ${status.unlocked ? '' : 'disabled'}>
      <div class="list-btn-top">
        <div><p class="eyebrow">${lesson.level}</p><h4>${lesson.title}</h4></div>
        <span class="status-badge ${status.completed ? 'done' : status.unlocked ? '' : 'locked'}">${status.completed ? 'Done' : status.unlocked ? `${lesson.xp}XP` : 'Locked'}</span>
      </div>
      <p class="muted">${hint}</p>
    </button>`;
  }).join('');
}

// ─── Render: selected lesson ───────────────────────────────────────────────────
function renderSelectedLesson() {
  const lesson = getSelectedLesson();
  const status = getLessonStatus(lesson);
  const step   = lesson.steps[state.lessonStepIndex] || lesson.steps[0];
  const hasImage = Boolean(state.showVisuals && step.image);

  document.getElementById('lessonMeta').textContent        = `${lesson.level} · ${lesson.tag}`;
  document.getElementById('lessonTitle').textContent       = lesson.title;
  document.getElementById('lessonDescription').textContent = lesson.description;
  document.getElementById('lessonObjective').textContent   = `Goal: ${lesson.objective}`;
  document.getElementById('lessonTryThis').textContent     = lesson.tryThis;
  document.getElementById('lessonMistake').textContent     = lesson.commonMistake;
  document.getElementById('stepCountLabel').textContent    = `Step ${state.lessonStepIndex + 1} of ${lesson.steps.length}`;
  document.getElementById('currentStepText').textContent   = step.text;
  document.getElementById('showVisualsToggle').checked     = state.showVisuals;

  const completeBtn = document.getElementById('completeLessonBtn');
  const resetBtn    = document.getElementById('resetLessonBtn');
  completeBtn.textContent = status.completed ? 'Completed ✓' : 'Mark complete';
  completeBtn.disabled    = status.completed;
  resetBtn.disabled       = !status.completed;

  document.getElementById('prevStepBtn').disabled = state.lessonStepIndex === 0;
  document.getElementById('nextStepBtn').disabled = state.lessonStepIndex === lesson.steps.length - 1;

  document.getElementById('lessonVisualArea').classList.toggle('hidden', !hasImage);
  document.getElementById('lessonVisualFallback').classList.toggle('hidden', hasImage || !state.showVisuals);

  if (hasImage) {
    const img       = document.getElementById('stepImage');
    const imagePath = resolveAssetPath(step.image);
    img.src         = imagePath;
    img.alt         = `${lesson.title} step ${state.lessonStepIndex + 1}`;
    img.dataset.lightboxSrc     = imagePath;
    img.dataset.lightboxAlt     = img.alt;
    img.dataset.lightboxCaption = `${step.text} ${step.afterLabel || ''}`.trim();
    document.getElementById('beforeLabel').textContent  = step.beforeLabel || 'Before';
    document.getElementById('afterLabel').textContent   = step.afterLabel  || 'After';
    document.getElementById('mistakeLabel').textContent = step.mistakeLabel || lesson.commonMistake;
  }

  const strip = document.getElementById('nextLessonStrip');
  if (strip) strip.classList.toggle('hidden', !status.completed);
}

// ─── Render: projects ──────────────────────────────────────────────────────────
function renderProjects() {
  document.getElementById('projectList').innerHTML = projects.map((project) => {
    const selected = project.title === state.selectedProjectTitle;
    const done     = state.completedProjects.includes(project.title);
    return `<button class="list-btn ${selected ? 'active' : ''}" data-select-project="${project.title}">
      <div class="list-btn-top">
        <div><h4>${project.title}</h4><p class="muted">${project.difficulty} · ${project.time}</p></div>
        <span class="status-badge ${done ? 'done' : ''}">${done ? 'Done' : 'Practice'}</span>
      </div>
    </button>`;
  }).join('');

  const project = getSelectedProject();
  document.getElementById('projectMeta').textContent        = `${project.difficulty} project · ${project.time}`;
  document.getElementById('projectTitle').textContent       = project.title;
  document.getElementById('projectDescription').textContent = project.description;
  document.getElementById('projectSkills').innerHTML        = project.skills.map((s) => `<span class="pill">${s}</span>`).join('');
  document.getElementById('showProjectVisualsToggle').checked = state.showProjectVisuals;
  document.getElementById('projectSteps').innerHTML = project.steps.map((step, i) => `
    <article class="project-step">
      <div class="step-number">${i + 1}</div>
      <div class="project-step-body">
        <h4>Step ${i + 1}</h4>
        <p class="muted">${step.text}</p>
        ${state.showProjectVisuals ? `<img class="project-step-image lightbox-trigger" src="${resolveAssetPath(step.image)}" alt="${project.title} step ${i + 1}" data-lightbox-src="${resolveAssetPath(step.image)}" data-lightbox-alt="${project.title} step ${i + 1}" data-lightbox-caption="${step.caption}"><p class="project-caption">${step.caption}</p>` : ''}
      </div>
    </article>`).join('');

  const done       = state.completedProjects.includes(project.title);
  const completeBtn = document.getElementById('completeProjectBtn');
  const resetBtn    = document.getElementById('resetProjectBtn');
  completeBtn.disabled    = done;
  completeBtn.textContent = done ? 'Project completed ✓' : 'Mark complete';
  resetBtn.disabled       = !done;
}

// ─── Render: quiz ──────────────────────────────────────────────────────────────
function renderQuiz() {
  document.getElementById('quizList').innerHTML = quizQuestions.map((q, i) => {
    const selected = state.quizAnswers[i];
    const feedback = !selected ? '' : selected === q.correct
      ? `<p class="muted" style="color:var(--success);margin-top:8px">✓ Correct. ${q.why}</p>`
      : `<p class="muted" style="color:var(--error);margin-top:8px">✗ The correct answer is <strong>${q.correct}</strong>. ${q.why}</p>`;
    return `<article class="quiz-card">
      <p class="eyebrow">Question ${i + 1}</p>
      <h4>${q.question}</h4>
      <ul class="quiz-answer-list">${q.answers.map((a) => `<li><button class="answer-btn ${a === selected ? 'selected' : ''} ${selected && a === q.correct ? 'correct' : ''}" data-answer-question="${i}" data-answer-value="${a}">${a}</button></li>`).join('')}</ul>
      ${feedback}
    </article>`;
  }).join('');
}

// ─── Render: troubleshooting (static — kept as reference page) ────────────────
const troubleshootingCards = [
  { label: 'TRIM not working', fix: 'Make sure lines actually intersect. Zoom in to verify, then rerun TRIM: select cutting edges → Enter → click the piece to remove.' },
  { label: 'JOIN says 0 items joined', fix: 'A tiny gap exists between endpoints. Zoom in very close, use OSNAP endpoint snaps to touch them exactly, then retry JOIN.' },
  { label: 'Cannot make it 3D', fix: 'The sketch outline must be fully closed. Use REGION or a closed POLYLINE before EXTRUDE. Open gaps break all 3D commands.' },
  { label: 'Drawing disappeared', fix: 'You are zoomed too far away. Type Z → Enter → A → Enter to Zoom All and bring everything back into view.' },
];
function renderTroubleshooting() {
  document.getElementById('troubleshootingGrid').innerHTML = troubleshootingCards.map((c) =>
    `<article class="trouble-card">
      <p class="eyebrow">Common issue</p>
      <h4>${c.label}</h4>
      <p class="muted">${c.fix}</p>
    </article>`).join('');
}

// ─── Render: profile ───────────────────────────────────────────────────────────
async function renderProfile() {
  const svc  = window.AutoCADCoachServices;
  const user = svc ? await svc.auth.getUser() : null;
  const authSection   = document.getElementById('profileAuthSection');
  const loggedSection = document.getElementById('profileLoggedSection');
  if (user) {
    authSection.classList.add('hidden');
    loggedSection.classList.remove('hidden');
    const name     = user.user_metadata?.name || user.email || 'Learner';
    const email    = user.email || '';
    const goal     = user.user_metadata?.goal || state.profile?.goal || '—';
    const initials = name.trim().split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
    document.getElementById('profileAvatar').textContent         = initials;
    document.getElementById('profileNameDisplay').textContent    = name;
    document.getElementById('profileEmailDisplay').textContent   = email;
    document.getElementById('profileGoalDisplay').textContent    = goal || '—';
    document.getElementById('profileStatusDisplay').textContent  = 'Signed in';
    document.getElementById('profilePasswordDisplay').textContent = '••••••';
    document.getElementById('logoutProfileBtn').disabled         = false;
  } else {
    authSection.classList.remove('hidden');
    loggedSection.classList.add('hidden');
  }
}

// ─── Chat (Puter.js — free AI, no API key needed) ─────────────────────────────

const CHAT_SYSTEM = `You are a friendly, practical AutoCAD tutor for beginners named AutoCoach.
You help with two things: diagnosing why commands like TRIM, JOIN, EXTRUDE, HATCH, or ARRAY aren't working, and answering general beginner AutoCAD questions.
Keep answers under 120 words unless the user asks for detail. Use plain conversational text — avoid heavy markdown or bullet overload. Be encouraging.`;

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatChatText(text) {
  return escapeHtml(text)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`\n]+)`/g, '<code style="background:rgba(14,165,233,0.12);padding:1px 5px;border-radius:5px;font-family:monospace;font-size:0.88em">$1</code>')
    .replace(/\n/g, '<br>');
}

function scrollChatToBottom() {
  const el = document.getElementById('chatMessages');
  if (el) el.scrollTop = el.scrollHeight;
}

function renderChat() {
  const container = document.getElementById('chatMessages');
  const emptyEl   = document.getElementById('chatEmpty');
  if (!container) return;

  if (chatMessages.length === 0) {
    // Show empty state with suggestions
    container.innerHTML = '';
    if (emptyEl) {
      const clone = emptyEl.cloneNode(true);
      clone.id = 'chatEmpty';
      clone.style.display = '';
      container.appendChild(clone);
      // Populate suggestion chips
      const chips = clone.querySelector('#suggestionChips');
      if (chips) {
        chips.innerHTML = chatSuggestions.map((s) =>
          `<button class="suggestion-chip" data-chat-suggestion="${s}">${s}</button>`).join('');
      }
    }
    return;
  }

  container.innerHTML = chatMessages.map((msg) => {
    const isUser      = msg.role === 'user';
    const isStreaming = msg.streaming;
    const text        = msg.content || '';
    return `<div class="chat-msg ${isUser ? 'chat-msg-user' : 'chat-msg-ai'}" data-msg-id="${msg.id}">
      ${!isUser ? '<div class="chat-avatar">◈</div>' : ''}
      <div class="chat-bubble ${isUser ? 'chat-bubble-user' : 'chat-bubble-ai'} ${msg.error ? 'chat-bubble-error' : ''}">
        <div class="chat-bubble-text">${isUser ? escapeHtml(text) : formatChatText(text)}</div>
        ${isStreaming ? '<span class="chat-cursor"></span>' : ''}
      </div>
    </div>`;
  }).join('');

  scrollChatToBottom();
}

function updateStreamingBubble(msgId, content) {
  const el = document.querySelector(`[data-msg-id="${msgId}"] .chat-bubble-text`);
  if (el) el.innerHTML = formatChatText(content);
  scrollChatToBottom();
}

async function sendChatMessage(userText) {
  userText = userText.trim();
  if (!userText) return;
  const sendBtn = document.getElementById('sendChatBtn');
  const inputEl = document.getElementById('chatInput');
  if (sendBtn) sendBtn.disabled = true;
  if (inputEl) { inputEl.value = ''; inputEl.style.height = 'auto'; }

  // Add user message
  chatMessages.push({ role: 'user', content: userText, id: `u${Date.now()}` });
  renderChat();

  // Add AI placeholder
  const aiId = `a${Date.now()}`;
  chatMessages.push({ role: 'assistant', content: '', id: aiId, streaming: true });
  renderChat();

  try {
    // Build messages for Puter.js (Anthropic format)
    const apiMessages = [
      { role: 'system', content: CHAT_SYSTEM },
      ...chatMessages
        .filter((m) => !m.streaming)
        .map((m) => ({ role: m.role, content: m.content }))
    ];

    const stream = await puter.ai.chat(apiMessages, { model: 'claude-sonnet-4-6', stream: true });

    let full = '';
    const aiMsg = chatMessages.find((m) => m.id === aiId);
    for await (const part of stream) {
      if (part?.text) {
        full += part.text;
        if (aiMsg) aiMsg.content = full;
        updateStreamingBubble(aiId, full);
      }
    }
    if (aiMsg) { aiMsg.streaming = false; aiMsg.content = full || '(No response — please try again.)'; }

  } catch (err) {
    const aiMsg = chatMessages.find((m) => m.id === aiId);
    if (aiMsg) {
      aiMsg.content  = `Something went wrong: ${err?.message || 'Unknown error'}. Make sure you are signed into puter.com.`;
      aiMsg.error    = true;
      aiMsg.streaming = false;
    }
  } finally {
    renderChat();
    if (sendBtn) sendBtn.disabled = false;
    if (inputEl) inputEl.focus();
  }
}

function initChatSuggestions() {
  const chips = document.getElementById('suggestionChips');
  if (!chips) return;
  chips.innerHTML = chatSuggestions.map((s) =>
    `<button class="suggestion-chip" data-chat-suggestion="${s}">${s}</button>`).join('');
}

// ─── Render all ───────────────────────────────────────────────────────────────
function render() {
  renderStats();
  renderDashboard(document.getElementById('lessonSearch')?.value || '');
  renderLessonList();
  renderSelectedLesson();
  renderProjects();
  renderQuiz();
  renderTroubleshooting();
  renderProfile();
  renderChat();
  setActiveTab(state.activeTab);
}

function goToLesson(id) {
  state.selectedLessonId = id;
  state.lessonStepIndex  = 0;
  setActiveTab('learn');
  saveState();
  render();
}

// ─── Sidebar helpers ───────────────────────────────────────────────────────────
function openSidebar()  { document.body.classList.add('sidebar-open'); }
function closeSidebar() { document.body.classList.remove('sidebar-open'); }

// ─── Wire events ──────────────────────────────────────────────────────────────
function wireEvents() {

  // Lightbox + general click delegation
  document.addEventListener('click', (event) => {
    const lightboxTrigger = event.target.closest('.lightbox-trigger');
    if (lightboxTrigger) {
      openLightbox(lightboxTrigger.dataset.lightboxSrc || lightboxTrigger.getAttribute('src'), lightboxTrigger.dataset.lightboxAlt || lightboxTrigger.getAttribute('alt') || 'Expanded visual', lightboxTrigger.dataset.lightboxCaption || '');
      return;
    }
    const closeTrigger = event.target.closest('[data-close-lightbox], #closeLightboxBtn');
    if (closeTrigger) { closeLightbox(); return; }

    const target = event.target.closest('button');
    if (!target) return;
    if (target.dataset.tabTarget)       { setActiveTab(target.dataset.tabTarget); closeSidebar(); return; }
    if (target.dataset.openLesson)      { goToLesson(Number(target.dataset.openLesson)); return; }
    if (target.dataset.selectLesson)    { goToLesson(Number(target.dataset.selectLesson)); return; }
    if (target.dataset.selectProject)   { state.selectedProjectTitle = target.dataset.selectProject; saveState(); renderProjects(); return; }
    if (target.dataset.answerQuestion)  { state.quizAnswers[target.dataset.answerQuestion] = target.dataset.answerValue; saveState(); renderStats(); renderQuiz(); return; }
    if (target.dataset.chatSuggestion)  { sendChatMessage(target.dataset.chatSuggestion); return; }
    if (target.dataset.action === 'goto-next-lesson') { goToLesson(getNextLesson().id); }
  });

  // Mobile sidebar
  document.getElementById('sidebarToggle').addEventListener('click', openSidebar);
  document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
  document.getElementById('sidebarScrim').addEventListener('click', closeSidebar);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeLightbox(); closeSidebar(); } });

  // Lesson controls
  document.getElementById('lessonSearch').addEventListener('input', (e) => renderDashboard(e.target.value));
  document.getElementById('showVisualsToggle').addEventListener('change', (e) => { state.showVisuals = e.target.checked; saveState(); renderSelectedLesson(); });
  document.getElementById('showProjectVisualsToggle').addEventListener('change', (e) => { state.showProjectVisuals = e.target.checked; saveState(); renderProjects(); });
  document.getElementById('prevStepBtn').addEventListener('click', () => { state.lessonStepIndex = Math.max(0, state.lessonStepIndex - 1); saveState(); renderSelectedLesson(); });
  document.getElementById('nextStepBtn').addEventListener('click', () => { const l = getSelectedLesson(); state.lessonStepIndex = Math.min(l.steps.length - 1, state.lessonStepIndex + 1); saveState(); renderSelectedLesson(); });
  document.getElementById('completeLessonBtn').addEventListener('click', () => { const l = getSelectedLesson(); if (!state.completedLessons.includes(l.id)) { state.completedLessons.push(l.id); state.completedLessons.sort((a, b) => a - b); state.streak += 1; saveState(); render(); } });
  document.getElementById('completeProjectBtn').addEventListener('click', () => { const p = getSelectedProject(); if (!state.completedProjects.includes(p.title)) { state.completedProjects.push(p.title); state.streak += 1; saveState(); renderStats(); renderProjects(); } });
  document.getElementById('resetLessonBtn').addEventListener('click', () => { const l = getSelectedLesson(); state.completedLessons = state.completedLessons.filter((id) => id !== l.id); saveState(); render(); });
  document.getElementById('resetProjectBtn').addEventListener('click', () => { const p = getSelectedProject(); state.completedProjects = state.completedProjects.filter((t) => t !== p.title); saveState(); renderProjects(); renderStats(); });
  document.getElementById('resetQuizBtn').addEventListener('click', () => { state.quizAnswers = {}; saveState(); renderStats(); renderQuiz(); });

  // Show password toggle
  document.getElementById('showPasswordToggle').addEventListener('change', (e) => {
    document.getElementById('profilePasswordInput').type = e.target.checked ? 'text' : 'password';
  });

  // Auth tabs
  const signInTabBtn = document.getElementById('signInTabBtn');
  const signUpTabBtn = document.getElementById('signUpTabBtn');
  const signInForm   = document.getElementById('signInForm');
  const signUpForm   = document.getElementById('signUpForm');
  signInTabBtn.addEventListener('click', () => { signInTabBtn.classList.add('active'); signUpTabBtn.classList.remove('active'); signInForm.classList.remove('hidden'); signUpForm.classList.add('hidden'); });
  signUpTabBtn.addEventListener('click', () => { signUpTabBtn.classList.add('active'); signInTabBtn.classList.remove('active'); signUpForm.classList.remove('hidden'); signInForm.classList.add('hidden'); });

  // Sign in
  document.getElementById('saveProfileBtn').addEventListener('click', async () => {
    const email = document.getElementById('profileEmailInput').value.trim();
    const password = document.getElementById('profilePasswordInput').value;
    const fb = document.getElementById('profileFeedback');
    if (!email || !password) { fb.textContent = 'Enter your email and password.'; fb.className = 'form-feedback error'; return; }
    fb.textContent = 'Signing in…'; fb.className = 'form-feedback';
    const svc = window.AutoCADCoachServices;
    const result = await svc.auth.signIn({ email, password });
    fb.textContent = result.message;
    fb.className = `form-feedback ${result.ok ? 'success' : 'error'}`;
    if (result.ok) { const saved = await svc.storage.readState(); if (saved) Object.assign(state, saved); render(); }
  });

  // Sign up
  document.getElementById('signUpBtn').addEventListener('click', async () => {
    const name = document.getElementById('profileNameInput').value.trim();
    const email = document.getElementById('regEmailInput').value.trim();
    const password = document.getElementById('regPasswordInput').value;
    const goal = document.getElementById('profileGoalInput').value.trim();
    const fb = document.getElementById('signUpFeedback');
    fb.textContent = 'Creating account…'; fb.className = 'form-feedback';
    const result = await window.AutoCADCoachServices.auth.signUp({ name, email, password, goal });
    fb.textContent = result.message;
    fb.className = `form-feedback ${result.ok ? 'success' : 'error'}`;
  });

  // Sign out / clear
  document.getElementById('logoutProfileBtn').addEventListener('click', async () => {
    await window.AutoCADCoachServices.auth.signOut();
    state.profile = { name: '', email: '', goal: '', loggedIn: false };
    saveState(); renderProfile();
  });
  document.getElementById('clearProfileBtn').addEventListener('click', async () => {
    await window.AutoCADCoachServices.auth.signOut();
    localStorage.clear();
    Object.assign(state, { completedLessons: [], completedProjects: [], streak: 0, quizAnswers: {}, profile: { name: '', email: '', goal: '', loggedIn: false } });
    render();
  });

  // Auth state observer
  window.AutoCADCoachServices?.auth.onAuthStateChange(async (event) => {
    if (event === 'SIGNED_IN') { const saved = await window.AutoCADCoachServices.storage.readState(); if (saved) Object.assign(state, saved); render(); }
    else if (event === 'SIGNED_OUT') { renderProfile(); }
  });

  // ── Chat ──────────────────────────────────────────────────────────────────
  const chatInput = document.getElementById('chatInput');
  const sendBtn   = document.getElementById('sendChatBtn');

  function submitChat() {
    const text = chatInput?.value?.trim();
    if (text) sendChatMessage(text);
  }

  sendBtn?.addEventListener('click', submitChat);

  chatInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitChat(); }
  });

  // Auto-resize textarea
  chatInput?.addEventListener('input', () => {
    chatInput.style.height = 'auto';
    chatInput.style.height = Math.min(chatInput.scrollHeight, 140) + 'px';
  });

  // Clear chat
  document.getElementById('clearChatBtn')?.addEventListener('click', () => {
    chatMessages = [];
    renderChat();
  });

  // Init suggestion chips on first render
  initChatSuggestions();
}

// ─── Boot ──────────────────────────────────────────────────────────────────────
loadState().then(() => {
  wireEvents();
  render();
});